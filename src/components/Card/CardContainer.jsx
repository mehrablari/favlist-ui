import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


const CardContainer = () => {
  return (
    <div className='bg-[#3973D4]'>
      <Card sx={{ maxWidth: 480}} className='flex mx-auto h-[300px] p-lg mb-[20px]'>
      <CardContent className='flex mx-auto flex-col align-middle text-center'>
        <Typography className='' gutterBottom>
          Todays question
        </Typography>
        
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          6d to expiry
        </Typography>
        <Typography className='font-bolder text-center text-[18px] leading-[24px]' >
        What are your favourite television shows of all time?
        </Typography>
      </CardContent>
      
    </Card>

    </div>

  )
}

export default CardContainer




