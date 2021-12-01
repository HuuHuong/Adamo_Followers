import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { COLOR, FakeData3, FontSize, screenWidth, SCREEN_ROUTER } from '../../../assets'
import { AppAvatar } from '../../../components/AppAvatar'
import { AppButton } from '../../../components/AppButton'
import { AppIcon } from '../../../components/AppIcon'
import { AppText } from '../../../components/AppText'
import { styles } from './styles'
import { useSelector } from 'react-redux'
export const Home = (props: any) => {
	const { navigation } = props
	const onSeeAll = () => {
		return
	}
	const onPurchase = () => {
		return navigation.navigate('PurchaseCoin')
	}
	const [category, setCategory] = useState()
	const dataUser = useSelector((store: any) => store.USER_INFOR.user)

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			style={{ backgroundColor: COLOR.Neutral.Neutral0 }}>
			<View style={{ alignItems: 'center' }}>
				<View style={{ marginTop: 40, width: screenWidth }}>
					<View style={styles.introUser}>
						<AppAvatar
							styleAvatar={styles.imgAvatar}
							pathImage={{ uri: dataUser.user.avatar }} />
						<View>
							<AppText styleText={styles.hello}>Hello</AppText>
							<AppText styleText={styles.headingTitle}>{dataUser.user.username}</AppText>
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
					<AppText styleText={[styles.headingTitle, { marginTop: 40, marginBottom: 20 }]}>Other</AppText>
					{FakeData3.map((categiries) => {
						if (categiries.id < 5)
							return (
								<View
									key={categiries.id}
									style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
								>
									<AppIcon
										styleIcon={styles.imgCate}
										pathImage={categiries.img} />
									<View style={{ marginLeft: 16 }}>
										<AppText styleText={styles.itemCateHeader}>{categiries.title}</AppText>
										<AppText styleText={styles.ietamCateTitle}>{categiries.numMember.toString()} members</AppText>
									</View>
								</View>
							)
					})}
					<AppButton
						onPress={onSeeAll}
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
