export const HeaderStyle = {
  mainContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

    // backgroundColor: 'yellow',

    // height: 110
  },

  mainTitle: {

    marginRight: 4,
    fontFamily: 'Dancing Script',
    fontSize: 70,
    // backgroundColor: 'pink',
  },
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4
  },
  buttonContainer: {
    backgroundColor: 'white',
    color: '#626D75',
    // color: 'pink',
    borderRadius: '10px',
    divShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    }

  }
}