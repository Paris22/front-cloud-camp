import Avatar from "../Avatar/Avatar"
import { Link } from "react-router-dom"
import { socials } from "./constants"
import style from "./profileInfo.module.scss"

const ProfileInfo = () => {
  return (
    <div className={style.profileHeader}>
      <div className={style.profileHeader__info}>
        <Avatar />
        <div className={style.profileHeader__about}>
          <span className={style.profileName}>Латанов Владислав</span>
          <ul className={style.socials}>
            {socials.map(social => (
              <li key={social.name}>
                <Link to={social.link} className={style.socials__link}>
                  <img src={social.img} alt="social-network-folder-icon" />
                  <span className={style.socials__text}>{social.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
