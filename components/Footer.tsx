
const Footer = () => {
  return (
    <footer>
        {Date().slice(0, 10)}
        <a href='https://wa.me/message/UGCMVOIZSDDED1' 
          title='Send a WhatsApp message'
          className='underline block my-4
            active:text-green-400 active:font-bold active:scale-105 duration-300'
        >
          Message me
        </a>
    </footer>
  )
}

export default Footer