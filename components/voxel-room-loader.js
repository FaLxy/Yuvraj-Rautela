import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const RoomSpinner = () => (
    <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const RoomContainer = forwardRef(({children}, ref) => (
  <Box 
    ref={ref} 
    className='voxel-room' 
    m="auto" 
    paddingTop={['0px','0px','0px']}
    mt={['0px','0px','0px']}
    mb={['-220px', '-340px', '-450px']}
    w={[480,640,800]}
    h={[480,640,800]}
    position="relative"
    >
      {children}
    </Box>
))

const Loader = () => {
    return (
      <RoomContainer>
        <RoomSpinner />
      </RoomContainer>
    )
}

export default Loader