import PropTypes from 'prop-types'
import React from 'react'

import api from 'api'

export const Form = ({ gameOver, time, pairsOfCards }) => {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const res = await api.addScore({initials: event.target.elements[0].value.toUpperCase(), time, pairsOfCards})
  }
  if (!gameOver) {
    return null
  }

  return (
    <form
      className="my-flex my-flex--align-center my-flex--justify-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="initials">Enter UR Initials:</label>
        <input
          type="text"
          id="initials"
          className="mx-2"
        />
      </div>
      <button className="button is-rounded">Go!</button>
    </form>
  )
}

Form.propTypes = {
  gameOver: PropTypes.bool,
  initials: PropTypes.string,
  time: PropTypes.string.isRequired,
  pairsOfCards: PropTypes.number.isRequired,
}
