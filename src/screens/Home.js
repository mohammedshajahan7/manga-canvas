import { SafeAreaView, View, FlatList } from 'react-native'

import { FocusedStatusBar, ComicCard, 
    MainHeader, HeadTitle, HomeFooter } from '../components'

import { COLORS, COMICSDATA, SIZES } from '../constants'

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <FocusedStatusBar backgroundColor={COLORS.secondary} barStyle='dark-content' />

            <MainHeader />

            <View style={{ padding: SIZES.large, marginVertical: SIZES.large }}>
                <HeadTitle 
                    textColor={COLORS.darkGray} 
                    titleText="Trending Comic" 
                />

                <FlatList 
                    data={COMICSDATA}
                    renderItem={({ item, index }) => <ComicCard data={item} index={index} arrLength={COMICSDATA.length} />}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Top authors section */}
            <View style={{ flex: 1 }}>
                <HomeFooter />
            </View>
        </SafeAreaView>
    )
}

export default Home