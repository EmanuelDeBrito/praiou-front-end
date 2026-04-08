import { View, FlatList, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainHeader } from "../../components/main/main-header"
import { MainContainer } from "../../components/main/main-container"
import { MainSubtitle } from "../../components/main/main-subtitle"
import { CategoryItem } from "../../components/main/category-item"
import { SearchInput } from "../../components/main/search-input"
import { RoundedIcon } from "../../components/main/rounded-icon"
import { categoryMap } from "../../utils/category-map"
import { useState } from "react"

const Screen = () => {
    const [eventSearch, setEventSearch] = useState("")

    const handleSearchButton = () => {

    }

    return(
        <SafeContainer>
            <MainHeader 
                image=""
                name="Mark Grayson"
                points={1000}
            />

            <MainContainer>
                <View style={styles.categoryArea}>
                    <MainSubtitle label="Categorias" />
                    <FlatList
                        data={categoryMap}
                        renderItem={({ item }) => (
                            <CategoryItem 
                                image={item.image}
                                label={item.name}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </View>

                <View style={styles.searchArea}>
                    <MainSubtitle label="Eventos" />
                    <View style={styles.formArea}>
                        <SearchInput 
                            placeholder="Pesquise por algum evento"
                            value={eventSearch}
                            onChangeText={setEventSearch}
                        />
                        <RoundedIcon 
                            icon="search"
                            big
                            handlePress={handleSearchButton}
                        />
                    </View>
                </View>
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    categoryArea: {
        gap: 10,
        paddingTop: 25,
    },
    searchArea: {
        paddingTop: 20
    },
    formArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    }
})

export default Screen