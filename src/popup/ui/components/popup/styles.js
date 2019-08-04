export default (vars) => ({
  '': {
    width: 300,
    background: 'white',
    border: '3px solid black',
    zIndex: '2147483647',
    boxSizing: 'border-box',
    padding: 0,
    fontSize: 14,
    fontFamily: 'sans-serif',
    lineHeight: 'normal',
    color: '#222',
    overflow: 'auto',
    ...vars.INITIAL_POPUP_POSITION
  },

  content: {
    padding: 10,
  },

  '.field': {
    display: 'flex',
  },

  '.header': {
    fontSize: 15,
    marginTop: 5,
    marginBottom: 10,
    fontWeight: '700',
    height: 20,
  },

  newTagInput: {
    flex: 'auto',
    borderWidth: 0,
    borderBottom: '2px solid black',
    paddingTop: 2,
    marginRight: 7,
    fontSize: 15,
  },

  'newTagInput:focus': {
    borderColor: 'rgb(114, 123, 243)',
    outline: 'none'
  },

  button: {
    background: 'none',
    fontSize: 15,
    lineHeight: '1.5',
    color: 'black',
    border: '2px solid black',
  },

  'button:hover': {
    borderColor: 'rgb(114, 123, 243)',
    backgroundColor: 'transparent',
    color: '#2a39fa',
  },

  allExistingTags: {
    marginTop: 13,
    width: '100%',
    background: 'none',
    border: '1px solid black',
  },

  'option:first-child': {
    display: 'none',
  },

  assignedTags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 15,
    paddingBottom: 3,
    borderBottom: '1px solid black',
  },

  'assignedTags > div:hover': {
    borderColor: 'rgb(114, 123, 243)',
    backgroundColor: 'transparent',
    color: '#2a39fa',
  },

  '.link': {
    marginTop: 13,
    marginBottom: 10,
    marginLeft: 5,
    float: 'right',
    cursor: 'pointer',
  }

});
