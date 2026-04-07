import { SafeContainer } from "../../components/general/safe-container"
import { MainHeader } from "../../components/main/main-header"

const Screen = () => {
    return(
        <SafeContainer>
            <MainHeader 
                image=""
                name="Mark Grayson"
                points={1000}
            />
        </SafeContainer>
    )
}

export default Screen