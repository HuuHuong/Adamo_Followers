import React, { useEffect, useState } from 'react'
import {
	View,
	Text,
	ScrollView,
	ImageBackground,
	TextInput
} from 'react-native'
import { useSelector } from 'react-redux'
import Modal from "react-native-modal";
import { COLOR, screenWidth } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppFlatlist } from '../../../components/AppFlatlist'
import { AppIcon } from '../../../components/AppIcon'
import { AppInput } from '../../../components/AppInput'
import { AppSearch } from '../../../components/AppSearch'
import { AppText } from '../../../components/AppText'
import { CheckBox } from '../../../components/CheckBox/CheckBox'
import { Detail_Category, Join_Community, Leave_Community } from '../../../services/API'
import { styles } from './styles'

export const JoinCommunity = (props: any) => {
	const { navigation } = props
	const [textFilter, setTextFilter] = useState('')
	const [userList, setUserList] = useState([])
	const [userFilter, setUserFilter] = useState([])
	const inforCommunity = useSelector((store: any) => store.COMMUNITIES.communityForum)
	const [isJoined, setIsJoined] = useState<Boolean>(false)
	const [onFilter, setOnFilter] = useState<Boolean>(false)
	const [male, setMale] = useState<Boolean>(false)
	const [female, setFemale] = useState<Boolean>(false)
	const [others, setOthers] = useState<Boolean>(false)
	const [minAge, setMinAge] = useState('')
	const [maxAge, setMaxAge] = useState('')

	useEffect(() => {
		const detailCategory = async () => {
			try {
				const response = await Detail_Category(inforCommunity?.id)
				setUserList(response.data.data.communities.data)
				setUserFilter(response.data.data.communities.data)
			} catch (error) {
				console.error({ error });
			}
		}
		detailCategory()
	}, [])

	const joinCommunity = async () => {
		try {
			const response = await Join_Community({ category_id: inforCommunity.id })
			console.log(response);
			setIsJoined(true)
		} catch (error) {
			console.error({ error })
		}
	}

	const leftCommunity = async () => {
		try {
			const response = await Leave_Community({ category_id: inforCommunity.id })
			console.log(response);
			setIsJoined(false)
		} catch (error) {
			console.error({ error });

		}
	}

	const onApplyFilter = () => {
		console.log(textFilter, minAge, maxAge, male, female, others);

		setOnFilter(false)
		const filterByName = userFilter.filter((item: any) => {
			setUserFilter(userList)
			return item.user.username.toLowerCase().includes(textFilter.toLowerCase())
		})

		const filterByAge = userFilter.filter((item: any) => {
			if (minAge === '') {
				if (maxAge === '')
					return item
				else return item.user.age <= parseInt(maxAge)
			}
			else {
				if (maxAge === '')
					return item.user.age >= parseInt(minAge)
				else return item.user.age >= parseInt(minAge) && item.user.age <= parseInt(maxAge)
			}
		})

		const filterByGender = userFilter.filter((item: any) => {
			if (male === female && female === others)
				return item
			else if (male == true) {
				if (female == true && others == false)
					return item.user.gender !== 3
				else if (female == false && others == true)
					return item.user.gender !== 2
				else return item.user.gender === 1
			}
			else if (female == true) {
				if (male == false && others == true)
					return item.user.gender !== 1
				else if (male == true && others == false)
					return item.user.gender !== 3
				else return item.user.gender === 2
			}
			else if (others == true) {
				if (male == true && female == false)
					return item.user.gender !== 2
				else if (male == false && female == true)
					return item.user.gender !== 1
				else return item.user.gender === 3
			}
		})

		const finalFilter = () => {
			const idByName = filterByName.map((item: any) => item.id);
			let filtered = filterByAge.filter((item: any) => idByName.includes(item.id));
			return filtered
		}

		console.log(userFilter);
		console.log(filterByName)
		console.log(filterByAge)
		console.log(filterByGender)
		console.log(finalFilter())
		return setUserFilter(finalFilter())
	}

	const onClearFilter = () => {
		setTextFilter('')
		setMinAge('')
		setMaxAge('')
		setMale(false)
		setFemale(false)
		setOthers(false)
		setUserFilter(userList)
	}

	const listHeader = () => {
		return (
			<View style={{ marginBottom: 24 }}>
				<AppButton
					styleBtn={{
						marginBottom: 24,
						marginTop: 40,
						width: 25
					}}
					onPress={() => navigation.goBack()}
					pathImage={require('../../../assets/icons/CaretLeft.png')}
				/>
				<ImageBackground
					imageStyle={{ borderRadius: 8 }}
					style={styles.backgroundImg}
					source={{ uri: inforCommunity.image }}
					resizeMode={'cover'}
				>
					<AppText styleText={styles.headingTitle}>{inforCommunity.title}</AppText>
					<AppText styleText={styles.title}>{inforCommunity.total_members} members</AppText>
					<AppButton
						activeOpacity={1}
						onPress={isJoined ? leftCommunity : joinCommunity}
						children={!isJoined ?
							'Participate' : 'Leaving'
						}
						styleBtn={[styles.btn,
						!isJoined ? { backgroundColor: COLOR.Primary } : {
							backgroundColor: COLOR.Sematic.Sematic4
						}]}
						styleChildren={styles.textBtn}
						pathImage={isJoined ? require('../../../assets/icons/SignOut.png') : null}
						styleIcon={{ width: 19, height: 19, marginLeft: 10 }}
					/>
				</ImageBackground>
				<View style={{
					backgroundColor: COLOR.TextField,
					paddingVertical: 25,
					paddingHorizontal: 25,
					borderRadius: 8,
					marginTop: 25,
					marginBottom: 35
				}}>
					<View style={{ flexDirection: 'row' }}>
						<AppIcon pathImage={require('../../../assets/icons/emtypoChat.png')} />
						<View style={{ paddingHorizontal: 25 }}>
							<AppText styleText={styles.forumHeading}>Real-time Forum</AppText>
							<AppText
								styleText={styles.forumTitle}
								numberOfLines={2}>Join now to give real-time PR about yourself</AppText>
						</View>
					</View>
					{!isJoined ? (
						<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
							<AppIcon pathImage={require('../../../assets/icons/Info.png')} />
							<AppText styleText={styles.forumNoti}>Join community to enter this forum</AppText>
						</View>) : (
						<AppButton
							styleBtn={{
								backgroundColor: 'red',
								flexDirection: 'row',
								alignItem: 'center',
								// width: 100
							}}
							children={'Go to forum'}
							pathImage={require('../../../assets/icons/CaretRight.png')}
						/>
					)}
				</View>

				<AppText styleText={styles.headingSection}>Member</AppText>
				<View style={{}}>
					<AppSearch
						onPress={() => setOnFilter(!onFilter)}
						onChangeText={setTextFilter}
						value={textFilter}
						placeholder={'Search by name'}
						type={'filter'} />
					<View style={[{
						backgroundColor: COLOR.Neutral.Neutral8,
						borderRadius: 8,
						width: '100%',
						paddingHorizontal: 32,


					}, !onFilter ? { display: 'none' } : { display: 'flex' }]}>
						<AppText styleText={styles.titleFilter}>Age</AppText>
						<View style={{
							width: '100%',
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							marginTop: 16
						}}>
							<TextInput
								keyboardType={'numeric'}
								onChangeText={setMinAge}
								value={minAge}
								style={styles.inputAge} />
							<View style={{ borderWidth: 1, width: 16.25, borderColor: COLOR.Neutral.Neutral6 }}></View>
							<TextInput
								keyboardType={'numeric'}
								onChangeText={setMaxAge}
								value={maxAge}
								style={styles.inputAge} />
						</View>
						<AppText styleText={styles.titleFilter}>Gender</AppText>
						<CheckBox
							styleCheckBox={!male ?
								{ backgroundColor: COLOR.Neutral.Neutral6 } :
								{ backgroundColor: COLOR.Primary }
							}
							styleIcon={!male ? { display: 'none' } : { display: 'flex' }}
							onPress={() => setMale(!male)}
							text={'Male'} />
						<CheckBox
							styleCheckBox={!female ?
								{ backgroundColor: COLOR.Neutral.Neutral6 } :
								{ backgroundColor: COLOR.Primary }
							}
							styleIcon={!female ? { display: 'none' } : { display: 'flex' }}
							onPress={() => setFemale(!female)}
							text={'Female'} />
						<CheckBox
							styleCheckBox={!others ?
								{ backgroundColor: COLOR.Neutral.Neutral6 } :
								{ backgroundColor: COLOR.Primary }
							}
							onPress={() => setOthers(!others)}
							styleIcon={!others ? { display: 'none' } : { display: 'flex' }}
							text={'Others'} />
						<View style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							marginTop: 40,
							marginBottom: 36
						}}>
							<AppButton
								onPress={onApplyFilter}
								activeOpacity={0.8}
								styleChildren={styles.applyFilter}
								children={'Apply'}
							/>
							<AppButton
								onPress={onClearFilter}
								activeOpacity={0.8}
								styleChildren={styles.clearFilter}
								children={'Clear'}
							/>
						</View>
					</View>
				</View>
			</View>
		)
	}

	const renderItem = ({ item }: any) => {
		return (
			<View style={{
				paddingHorizontal: 20,
				paddingVertical: 16,
				marginBottom: 16,
				backgroundColor: COLOR.Neutral.Neutral1,
				borderRadius: 8,
				flexDirection: 'row',
			}}>
				<AppAvatar
					styleAvatar={styles.avt}
					pathImage={{ uri: item.user.avatar }} />
				<View style={{ marginLeft: 20 }} >
					<AppText styleText={styles.userForum}>{item.user.username}</AppText>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<AppText styleText={styles.totalFriends}>{item.user.total_friend}</AppText>
						<AppIcon pathImage={require('../../../assets/icons/Users.png')} />
					</View>
					<AppText styleText={styles.userIntro}>{item.user.summary}</AppText>
				</View>
			</View>
		)
	}

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{
				flex: 1,
				backgroundColor: COLOR.Neutral.Neutral0,
				paddingHorizontal: 24
			}}>
			{listHeader()}
			<AppFlatlist
				data={userFilter}
				renderItem={renderItem}
			// listHeader={listHeader}
			/>
		</ScrollView>
	)
}
