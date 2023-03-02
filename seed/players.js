const db = require('../db')
const { Player } = require('../models')
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

db.on('error', console.error.bind(console, 'MongoDB connetion error:'))

const main = async () => {
  /* 
  
  Keeping this here to immortalize forever :)
  
  const players = [
    {
      displayName: 'Aaron Sanchez',
      commonName: 'A. Sanchez',
      position: 'Midfielder',
      number: 12,
      team: 'Austin FC',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTYwNjY0MzA3N15BMl5BanBnXkFtZTYwNDIwMTY3._V1_.jpg',
      rating: 6.9
    },
    {
      displayName: 'Leone Varando',
      commonName: 'L. Varando',
      position: 'Defender',
      number: 69,
      team: 'DC United',
      image:
        'https://media.licdn.com/dms/image/D5635AQHdHnwCrZEmTg/profile-framedphoto-shrink_400_400/0/1664061949256?e=1678348800&v=beta&t=zDG6VjG17BYe9s641pVf4tUqVw9MDhZO1BQjY5ijMNc',
      rating: 100
    }
  ] */

  const players = []

  const seasonId = 20901
  const teamIdResponse = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/season/${seasonId}?api_token=${process.env.TOKEN}`)

  
  const teams = teamIdResponse.data.data
  
  const teamIdArr = []
  
  teams.map((team) => {
    teamIdArr.push(team.id)
  })

  for(let i = 0; i < teamIdArr.length; i++) {
    const teamPlayersResponse = await axios.get(`https://soccer.sportmonks.com/api/v2.0/teams/${teamIdArr[i]}?api_token=${process.env.TOKEN}&include=squad.player`)

    const currentTeam = teamPlayersResponse.data.data
    
    for(let x = 0; x < currentTeam.squad.data.length; x++) {
      // let position = {
      //   1: 'Goalkeeper',
      //   2: 'Defender',
      //   3: 'Midfielder',
      //   4: 'Forward'
      // }

      let playerObject = {
        displayName: '',
        commonName: '',
        position: '',
        number: '',
        team: '',
        image: '',
        rating: '',
      }

      let currentPlayer = currentTeam.squad.data[x]

      let currentPlayerInfo = currentTeam.squad.data[x].player.data

      playerObject = {
        displayName: currentPlayerInfo.display_name,
        commonName: currentPlayerInfo.common_name,
        position: currentPlayer.position_id,
        number: parseInt(currentPlayer.number) ? parseInt(currentPlayer.number) : 99,
        team: currentTeam.name,
        image: currentPlayerInfo.image_path,
        rating: parseFloat(currentPlayer.rating) ? parseFloat(currentPlayer.rating) : 0
      }

      players.push(playerObject)
    }
  }

  // console.log(players)

  await Player.insertMany(players)
  console.log('Seed has been planted!')
}

const run = async () => {
  await main()
  db.close()
}

run()
