// https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb
import React, { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from '@/store'
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from '@/store/counter/counterSlice'
import { useTranslation, Trans } from 'react-i18next'
import { lngs } from '@/i18n'
import styles from './Counter.module.css'

export function Counter() {
  const { t, i18n } = useTranslation()
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  const incrementValue = Number(incrementAmount) || 0
  const [counterTime, setCounterTime] = useState(0)

  useEffect(() => {
    setCounterTime((pre) => pre + 1)
  }, [count])

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}>
          {t('counter.add')}
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}>
          {t('counter.addAsync')}
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          {t('counter.addIfOdd')}
        </button>
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng as keyof typeof lngs].nativeName}
            </button>
          ))}
        </div>
      </div>
      <p>
        {t('counter.counter_other', {
          count: counterTime,
        })}
      </p>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
    </div>
  )
}
