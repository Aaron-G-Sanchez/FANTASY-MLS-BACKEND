const db = require('../db')
const { Player } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connetion error:'))

const main = async () => {
  const players = [
    {
      name: 'Aaron Sanchez',
      commonName: 'A. Sanchez',
      position: 'Midfielder',
      number: 12,
      team: 'Austin FC',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTYwNjY0MzA3N15BMl5BanBnXkFtZTYwNDIwMTY3._V1_.jpg',
      rating: 6.9
    },
    {
      name: 'Leone Varando',
      commonName: 'L. Varando',
      position: 'Defender',
      number: 69,
      team: 'DC United',
      image:
        'https://media.licdn.com/dms/image/D5635AQHdHnwCrZEmTg/profile-framedphoto-shrink_400_400/0/1664061949256?e=1678348800&v=beta&t=zDG6VjG17BYe9s641pVf4tUqVw9MDhZO1BQjY5ijMNc',
      rating: 100
    }
  ]

  await Player.insertMany(players)
  console.log('Seed has been planted!')
}

const run = async () => {
  await main()
  db.close()
}

run()
