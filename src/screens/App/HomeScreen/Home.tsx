import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { COLOR, FakeData3, FontSize, screenWidth, SCREEN_ROUTER } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { HOME } from '../../../services/API'
import { AppFlatlist } from '../../../components/AppFlatlist'

export const Home = (props: any) => {
	const { navigation } = props
	const ditpatch = useDispatch()
	const [userInfo, setUserInfor] = useState<any>()

	const onPurchase = () => {
		return navigation.navigate('PurchaseCoin')
	}
	const [category, setCategory] = useState()
	useEffect(() => {
		const getUserInfor = async () => {
			try {
				const response = await HOME()
				console.log(userInfo);
				setUserInfor(response?.data?.data?.data)
				ditpatch({ type: 'USER_LOGIN', payLoad: userInfo })

			} catch (error) {
				console.error({ error });

			}
		}
		getUserInfor()
	}, [])

	const renderJoinedCommunities = ({ item }: any) => {
		return (
			<View style={{ marginRight: 12 }}>
				<AppAvatar
					styleAvatar={styles.imgJoied}
					pathImage={{ uri: item.image }} />
				<AppText styleText={styles.titedJoined}>{item.name}</AppText>
			</View>
		)
	}

	const renderListCommunities = ({ item }: any) => {
		return (
			<View>

			</View>
		)
	}

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ backgroundColor: COLOR.Neutral.Neutral0 }}>
			<View style={{ alignItems: 'center' }}>
				<View style={{ marginTop: 40, width: screenWidth }}>
					<View style={styles.introUser}>
						<AppAvatar
							styleAvatar={styles.imgAvatar}
							pathImage={{ uri: userInfo?.user?.avatar }} />
						<View>
							<AppText styleText={styles.hello}>Hello</AppText>
							<AppText styleText={styles.headingTitle}>{userInfo?.user?.username}</AppText>
						</View>
					</View>
					<View style={styles.newsNoti}>
						<AppIcon
							styleIcon={styles.iconSpeaker}
							pathImage={require('../../../assets/icons/speaker.png')}
						/>
						<View>
							<AppText styleText={styles.newsHeading}>News for you</AppText>
							<AppText styleText={styles.newsTitle}>You don't have enough
								<AppText styleText={{
									fontFamily: 'NotoSans-Bold',
									fontSize: FontSize.Font14,
									color: COLOR.Neutral.Neutral6,
								}}> TomoCoins!</AppText>
							</AppText>
							<AppText styleText={styles.newsTitle}>Please purchase some in store.</AppText>
						</View>
					</View>
					<AppText styleText={[styles.headingTitle, { marginTop: 35, marginBottom: 20 }]}>Joined Communities</AppText>
					<AppFlatlist
						horizontal={true}
						data={userInfo?.user?.communities}
						renderItem={renderJoinedCommunities}
					// listHeader={listHeader}
					/>
					<AppText styleText={[styles.headingTitle, { marginTop: 40, marginBottom: 20 }]}>Other</AppText>


					{/* {userInfo?.listCategories?.map((categiries: any) => {
						if (categiries.id < 5)
							return (
								<View
									key={categiries.id}
									style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
								>
									<AppIcon
										styleIcon={styles.imgCate}
										pathImage={{ uri: categiries?.image }} />
									<View style={{ marginLeft: 16 }}>
										<AppText styleText={styles.itemCateHeader}>{categiries?.title}</AppText>
										<AppText styleText={styles.ietamCateTitle}>{categiries?.total_members} members</AppText>
									</View>
								</View>
							)
					})} */}
					<AppButton
						onPress={() => navigation.navigate('Communities')}
						styleBtn={styles.seeAll}
						children={'See all'}
						styleChildren={styles.txtBtn}
						pathImage={require('../../../assets/icons/CaretRight.png')}
					/>

					<AppButton
						onPress={onPurchase}
						styleBtn={styles.btn}
						children={'Purchase TomoCoins'}
						styleChildren={styles.titleBtn}
						pathImage={require('../../../assets/icons/Coin.png')}
						styleIcon={styles.iconBtnFooter}
					/>
					<AppButton
						styleBtn={styles.btn}
						children={'Introduce via Twitter'}
						styleChildren={styles.titleBtn}
						pathImage={require('../../../assets/icons/TwitterLogo.png')}
						styleIcon={styles.iconBtnFooter}
					/>
					<AppButton
						styleBtn={[styles.btn, { marginBottom: 40 }]}
						children={'Introduce via Facebook'}
						styleChildren={styles.titleBtn}
						pathImage={require('../../../assets/icons/FacebookLogo.png')}
						styleIcon={styles.iconBtnFooter}
					/>
				</View>
			</View>
		</ScrollView>
	)
}
