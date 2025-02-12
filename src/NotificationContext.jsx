import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotificationDispatch = () => {
  const [text, dispatch] = useContext(NotificationContext)
  return dispatch
}

export const useNotificationValue = () => {
  const [text, dispatch] = useContext(NotificationContext)
  return text
}

export const NotificationContextProvider = (props) => {
  const [notificationText, notificationDispatch] = useReducer(notificationReducer, 'ALUSTAVA TEKSTI')
  
  return (
    <NotificationContext.Provider value={[notificationText, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext