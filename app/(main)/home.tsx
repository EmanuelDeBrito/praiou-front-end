import { View, ScrollView, FlatList, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainHeader } from "../../components/main/main-header"
import { MainContainer } from "../../components/main/main-container"
import { MainSubtitle } from "../../components/main/main-subtitle"
import { CategoryItem } from "../../components/main/category-item"
import { SearchInput } from "../../components/main/search-input"
import { RoundedIcon } from "../../components/main/rounded-icon"
import { EventItem } from "../../components/main/event-item"
import { EventInfoItem } from "../../components/main/event-info-item"
import { useTokenContext } from "../../contexts/token-context"
import { EventType } from "../../types/event-type"
import { getAllEvents } from "../../services/api"
import { categoryMap } from "../../utils/category-map"
import { useState, useEffect } from "react"

const Screen = () => {
    const { token } = useTokenContext()

    const [eventSearch, setEventSearch] = useState("")
    const [events, setEvents] = useState<EventType[]>([])

    const handleSearchButton = () => {

    }

    const handleMyEvents = () => {

    }

    const handleMyInscriptions = () => {

    }

    useEffect(() => {
        const takeAllEvents = async () => {
            const response = await getAllEvents(token)
            //console.log(response)
            
            if(response){
                setEvents(response.eventos)
            }
        }
        takeAllEvents()
    }, [])

    return(
        <SafeContainer>
            <MainHeader 
                image=""
                name="Mark Grayson"
                points={1000}
            />
            
            <ScrollView>
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

                    <View style={styles.eventArea}>
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

                        <FlatList
                            style={styles.eventsArea}
                            data={events}
                            renderItem={({ item }) => (
                                <EventItem 
                                    id={item.idEvento}
                                    name={item.nome}
                                    address={item.endereco}
                                    type={item.tipoEvento}
                                    date={item.data}
                                    hour={item.horario}
                                />
                            )}
                            keyExtractor={item => item.idEvento.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                    
                    <View style={styles.eventInfoArea}>
                        <EventInfoItem 
                            label="Meus Eventos"
                            onPress={handleMyEvents}
                        />
                        <EventInfoItem 
                            label="Minhas Inscrições"
                            bottomLine
                            onPress={handleMyInscriptions}
                        />
                    </View>
                </MainContainer>
            </ScrollView>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    categoryArea: {
        gap: 10,
        paddingTop: 25,
    },
    eventArea: {
        paddingTop: 20
    },
    formArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 10
    },
    eventsArea: {
        height: 210,
        marginTop: 20,
        overflow: 'hidden'
    },
    eventInfoArea: {
        gap: 20,
        marginVertical: 30
    }
})

export default Screen