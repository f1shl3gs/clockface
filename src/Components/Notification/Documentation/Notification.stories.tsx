// Libraries
import {createRef, useState} from 'react'
import {marked} from 'marked'

// Utils
import {
  generateRandomText,
  getRandomIcon,
  getRandomGradient,
} from '../../../Utils'

// Components
import {Notification, NotificationDialog} from '../index'

// Types
import {
  IconFont,
  Gradients,
  InfluxColors,
  Alignment,
  VerticalAlignment,
  ComponentSize,
  ComponentColor,
} from '../../../Types'

// Notes
import NotificationReadme from './Notification.md?raw'
import NotificationDialogReadme from './NotificationDialog.md?raw'

export default {title: 'Components/Notification'}

interface TestNotification {
  id: string
  text: string
  icon: IconFont
  gradient: Gradients
  visible: boolean
  horizontalAlign: Alignment
  verticalAlign: VerticalAlignment
}

export const _Notification = () => {
  const [notifications, updateNotifications] = useState<TestNotification[]>([])

  const randomTextLower = 5
  const randomTextUpper = 30

  const defaultNotificationStyle = {maxWidth: '500px'}

  const handleGenerateNotification =
    (verticalAlign: VerticalAlignment, horizontalAlign: Alignment) =>
    (): void => {
      const id = crypto.randomUUID()
      const text = generateRandomText(randomTextLower, randomTextUpper)
      const icon = getRandomIcon()
      const gradient = getRandomGradient()
      const visible = true

      const newNotification: TestNotification = {
        id,
        text,
        icon,
        gradient,
        visible,
        horizontalAlign,
        verticalAlign,
      }

      const updatedNotifications = [...notifications, newNotification]

      updateNotifications(updatedNotifications)
    }

  const handleDismiss = (id?: string): void => {
    if (id === undefined) {
      return
    }
    const updatedNotifications = notifications.map(n => {
      if (n.id === id) {
        return {...n, visible: false}
      }

      return n
    })

    updateNotifications(updatedNotifications)
  }

  const handleDismissNotifications = (): void => {
    const updatedNotifications = notifications.map(n => ({
      ...n,
      visible: false,
    }))
    updateNotifications(updatedNotifications)
  }

  return (
    <div className="story--example" style={{flexDirection: 'column'}}>
      <p>Click a button to generate a random notification</p>
      <div className="notification-tester">
        <div>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Top,
              Alignment.Left
            )}
          >
            Top Left
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Top,
              Alignment.Center
            )}
          >
            Top Center
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Top,
              Alignment.Right
            )}
          >
            Top Right
          </button>
        </div>
        <div>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Middle,
              Alignment.Left
            )}
          >
            Middle Left
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Middle,
              Alignment.Center
            )}
          >
            Middle Center
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Middle,
              Alignment.Right
            )}
          >
            Middle Right
          </button>
        </div>
        <div>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Bottom,
              Alignment.Left
            )}
          >
            Bottom Left
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Bottom,
              Alignment.Center
            )}
          >
            Bottom Center
          </button>
          <button
            className="story--test-button"
            onClick={handleGenerateNotification(
              VerticalAlignment.Bottom,
              Alignment.Right
            )}
          >
            Bottom Right
          </button>
        </div>
      </div>
      <button
        className="story--test-button"
        onClick={handleDismissNotifications}
        disabled={notifications.length === 0}
      >
        Dismiss All
      </button>
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          id={notification.id}
          visible={notification.visible}
          icon={notification.icon}
          gradient={notification.gradient}
          onDismiss={handleDismiss}
          size={ComponentSize.Small}
          horizontalAlignment={notification.horizontalAlign}
          verticalAlignment={notification.verticalAlign}
          style={defaultNotificationStyle}
        >
          {notification.text}
        </Notification>
      ))}
    </div>
  )
}

_Notification.story = {
  parameters: {
    readme: {
      content: marked.parse(NotificationReadme),
    },
  },
}

export const _NotificationDialog = () => {
  const notificationDialogRef = createRef<HTMLDivElement>()

  const logRef = (): void => {
    /* eslint-disable */
    console.log(notificationDialogRef.current)
    /* eslint-enable */
  }

  const handleClose = (): void => {
    /* eslint-disable */
    alert('calling onDismiss')
    /* eslint-enable */
  }

  return (
    <div className="story--example">
      <NotificationDialog
        ref={notificationDialogRef}
        size={(ComponentSize as Record<string, any>)['Small']}
        icon={(IconFont as Record<string, any>)['Checkmark_New']}
        gradient={(Gradients as Record<string, any>)['GarageBand']}
        color={(ComponentColor as Record<string, any>)['Primary']}
        backgroundColor={`${InfluxColors.Castle}`}
        onDismiss={handleClose}
      >
        <span>{'Congrats! The thing has happened!'}</span>
      </NotificationDialog>
      <div className="story--test-buttons">
        <button onClick={logRef}>Log Ref</button>
      </div>
    </div>
  )
}

_NotificationDialog.story = {
  name: 'NotificationDialog',

  parameters: {
    readme: {
      content: marked.parse(NotificationDialogReadme),
    },
  },
}
