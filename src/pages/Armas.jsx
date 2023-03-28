import { Box } from '@chakra-ui/react'
import Arma from '../components/Arma'
import '../css/style_armas.scss'


const Agentes = () => {
  return (
    <Box color={'gray'}>
      <ul className='ul_armas'>
        {<Arma/>}
      </ul>
    </Box>
  )
}

export default Agentes