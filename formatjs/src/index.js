import {defineMessage} from 'react-intl'

defineMessage({
  id: 'id_specified',
  defaultMessage: 'Message 1 to be translated',
  description: 'A message with an ID explicitly specified',
})

defineMessage({
  defaultMessage: 'Message 2 to be translated',
  description: 'A message without an ID explicitly specified',
})
