import { GLOBAL_VAR } from "../global_variable";
import ImgWork from '../../assets/images/icon/icon-work.svg'
import ImgPlay from '../../assets/images/icon/icon-play.svg'
import ImgStudy from '../../assets/images/icon/icon-study.svg'
import ImgExercise from '../../assets/images/icon/icon-exercise.svg'
import ImgSocial from '../../assets/images/icon/icon-social.svg'
import ImgSelfCare from '../../assets/images/icon/icon-self-care.svg'

export const reducerActivity = (state, {timeframes}) => {
  switch (timeframes) {
    case GLOBAL_VAR.DAILY:
      return { selected : 'Daily'}
    case GLOBAL_VAR.WEEKLY:
      return { selected : 'Weekly'}
    default:
      return { selected : 'Monthly'}
  }
}

export const reducerActivityColor = (state, {title}) => {
  switch (title) {
    case GLOBAL_VAR.WORK:
      return { color: 'bg-work' }
    case GLOBAL_VAR.PLAY:
      return { color: 'bg-play' }
    case GLOBAL_VAR.STUDY:
      return { color: 'bg-study' }
    case GLOBAL_VAR.EXERCISE:
      return { color: 'bg-exercise' }
    case GLOBAL_VAR.SOCIAL:
      return { color: 'bg-social' }
    default:
      return { color: 'bg-self-care' }
  }
}

export const reducerActivityIcon = (state, action) => {
  switch (action.title) {
    case 'Work':
      return { img: ImgWork }
    case 'Play':
      return { img: ImgPlay }
    case 'Study':
      return { img: ImgStudy }
    case 'Exercise':
      return { img: ImgExercise }
    case 'Social':
      return { img: ImgSocial }
    default:
      return { img: ImgSelfCare }
  }
}
