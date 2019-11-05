export default (vars) => ({
  '': {
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
    width: '100%',
    marginTop: 13,
    background: 'none',
    border: '1px solid black',
  },

  'option:first-child': {
    display: 'none',
  },

  assignedTags: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 12,
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
  },

  recentlyVisitedPages: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 7,
    marginBottom: 23,
    position: 'relative'
  },

  'recentlyVisitedPages:after': {
    content: '""',
    borderBottom: '1px solid black',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -12,
  },

  'recentlyVisitedPages li': {
    padding: '3px 0 5px 23px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15px 15px',
    backgroundPosition: '0 5px',
  },

  'recentlyVisitedPages li:hover': {
    backgroundColor: 'rgba(114, 123, 243, 0.1)'
  },

  h3: {
    margin: '0 0 5px 0',
    position: 'relative',
  },

  switchTagsButton: {
    cursor: 'pointer',
  },

  'switchTagsButton:hover': {
    color: 'rgb(114, 123, 243)'
  },

  'switchTagsButton::after': {
    content: '""',
    borderTop: '5px solid transparent',
    borderLeft: '5px solid transparent',
    borderBottom: '5px solid transparent',
    borderRight: '5px solid transparent',
    position: 'absolute',
    top: 5,
    left: 125
  },

  '.rightTriangle::after': {
    borderLeftColor: 'black',
  },

  '.rightTriangle:hover::after': {
    borderLeftColor: 'rgb(114, 123, 243)'
  },

  '.bottomTriangle::after': {
    top: 8,
    left: 124,
    borderTopColor: 'black',
  },

  '.bottomTriangle:hover::after': {
    borderTopColor: 'rgb(114, 123, 243)'
  },

});
