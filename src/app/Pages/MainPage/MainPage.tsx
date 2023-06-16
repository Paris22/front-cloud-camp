import ProfileInfo from "@/app/components/ProfileInfo/ProfileInfo"
import style from "./mainPage.module.scss"
import FormAboutMe from "@/app/components/Form/FormAboutMe/FormAboutMe"

const MainPage = () => {
  return (
    <div className={style.container}>
      <ProfileInfo />
      <FormAboutMe />
    </div>
  )
}

export default MainPage
