import CheckIcon from "@assets/checkIcon.svg"

import styles from "./Stepper.module.scss"
import { useAppSelector } from "@/hooks/redux"
import { tabsArray } from "@/helpers/constants/tabs"

const Stepper = () => {
  const activeTabIndex = useAppSelector(
    state => state.tabsReducer.activeTabIndex
  )
  const steps = 3

  return (
    <div className={styles.root}>
      {Array(steps)
        .fill("")
        .map((_, i) => (
          <div
            className={`${styles.stepItem} ${
              activeTabIndex === i + 1 && styles.active
            } ${i + 1 < activeTabIndex && styles.complete}`}
            key={i}
          >
            <div className={styles.step}>
              <img
                className={styles.iconComplete}
                src={CheckIcon}
                alt="check-icon"
              />
            </div>

            <p className={styles.label}>{i + 1}</p>
          </div>
        ))}
    </div>
  )
}

export default Stepper
