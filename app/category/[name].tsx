import { View, FlatList, StyleSheet } from "react-native"
import { SafeContainer } from "../../components/general/safe-container"
import { MainContainer } from "../../components/main/main-container"
import { BackButton } from "../../components/main/back-button"
import { MainTitle } from "../../components/main/main-title"
import { EventItem } from "../../components/main/event-item"
import { textWithoutAccents } from "../../utils/text-format"
import { getEventsByCategory } from "../../services/api"
import { EventType } from "../../types/event-type"
import { useTokenContext } from "../../contexts/token-context"
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"

const Screen = () => {
    const { token } = useTokenContext()
    const { name } = useLocalSearchParams()

    const [events, setEvents] = useState<EventType[]>([])

    const categoryNameFormatted = textWithoutAccents(name as string)

    useEffect(() => {
        const takeEvents = async () => {
            const response = await getEventsByCategory(token, categoryNameFormatted)
            console.log(response)

            if(response){
                setEvents(response.eventos)
            }
        }

        takeEvents()
    }, [])

    return(
        <SafeContainer>
            <MainContainer vertical>
                <BackButton />

                <View style={styles.eventsArea}>
                    <MainTitle label={`Eventos de ${name}`} />

                    <FlatList
                        style={styles.eventsList}
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
            </MainContainer>
        </SafeContainer>
    )
}

const styles = StyleSheet.create({
    eventsArea: {
        marginTop: 15,
    },
    eventsList: {
        marginTop: 15,
        height: '84%'
    }
})

export default Screen