export default {
  async index(numOfCards = 12) {
    const deckRes = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    )

    const { deck_id } = await deckRes.json()

    const cardsRes = await fetch(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${numOfCards}`
    )

    return await cardsRes.json()
  },


  async addScore(newScoreDeets) {
    const addScoreRes = await fetch(
      "https://concentration-react-app.herokuapp.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newScoreDeets)
      })

      return await addScoreRes.json()
  },

  async getScores() {
    const getScores = await fetch(
      "https://concentration-react-app.herokuapp.com/")

      return await getScores.json()
  },
}


