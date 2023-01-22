import MockAdapter from "axios-mock-adapter"
import { api } from "./api"
import img1 from "../../components/images/RecentTransactions/ComuteIcon.png"
import img2 from "../../components/images/RecentTransactions/RestaurantIcon.png"
import img3 from "../../components/images/RecentTransactions/TravelIcon.png"
import img4 from "../../components/images/RecentTransactions/PersonalTransactionIcon.png"
import img5 from "../../components/images/RecentTransactions/businessTransactionIcon.png"
import { Account, Transaction } from "../../interfaces/interfaces"

const mock = new MockAdapter(api.apisauce.axiosInstance)

mock.onGet("/accounts").reply<Account[]>(200, [
  {
    id: "1234-4567-3456-3456",
    currentBalance: 76451.0,
  },
  {
    id: "1234-4567-3456-3457",
    currentBalance: 499.0,
  },
  {
    id: "1234-4567-3456-3458",
    currentBalance: 4503.0,
  },
  {
    id: "1234-4567-3456-3459",
    currentBalance: 99999.5,
  },
])
// const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)

const Transactions = [
  {
    id: `"Golub" Taxi Transportation`,
    title: `"Golub" Taxi Transportation`,
    date: "20th May, 18:39",
    amount: -345.0,
    coin: "EUR",
    img: img1,
  },
  {
    id: `"Francois" Restaurant Dinner`,
    title: `"Francois" Restaurant Dinner`,
    date: "15th May, 20:56",
    amount: -1158.0,
    coin: "EUR",
    img: img2,
  },
  {
    id: `"AirMax" Travel to Paris`,
    title: `"AirMax" Travel to Paris`,
    date: "14th May, 16:00",
    amount: -813.0,
    coin: "EUR",
    img: img3,
  },
  {
    id: `Construction ltd`,
    title: `Construction ltd`,
    date: "11th May, 09:26",
    amount: 24500.0,
    coin: "USD",
    img: img4,
  },
  {
    id: `Robert Smith`,
    title: `Robert Smith`,
    date: "03rd May, 12:06",
    amount: 11215.0,
    coin: "USD",
    img: img5,
  },
  {
    id: "Ashley Taylor",
    title: "Ashley Taylor",
    date: "17th July, 11:30",
    amount: 98765.0,
    coin: "USD",
    img: img5,
  },
  {
    id: "David Rodriguez",
    title: "David Rodriguez",
    date: "28th November, 20:15",
    amount: 24689.0,
    coin: "USD",
    img: img4,
  },
  {
    id: "Jessica Garcia",
    title: "Jessica Garcia",
    date: "12th October, 09:00",
    amount: 13579.0,
    coin: "USD",
    img: img3,
  },
  {
    id: "Richard Martinez",
    title: "Richard Martinez",
    date: "01st March, 14:45",
    amount: 86420.0,
    coin: "USD",
    img: img2,
  },
  {
    id: "Maria Robinson",
    title: "Maria Robinson",
    date: "19th August, 18:30",
    amount: 75316.0,
    coin: "USD",
    img: img1,
  },
  {
    id: "James Thompson",
    title: "James Thompson",
    date: "06th January, 21:00",
    amount: 96384.0,
    coin: "USD",
    img: img1,
  },
  {
    id: "William Gonzalez",
    title: "William Gonzalez",
    date: "23rd September, 13:15",
    amount: 52468.0,
    coin: "USD",
    img: img2,
  },
  {
    id: "Brian Hall",
    title: "Brian Hall",
    date: "05th May, 08:00",
    amount: 39642.0,
    coin: "USD",
    img: img3,
  },
  {
    id: "Joshua Allen",
    title: "Joshua Allen",
    date: "16th June, 22:45",
    amount: 28541.0,
    coin: "USD",
    img: img4,
  },
  {
    id: "Matthew King",
    title: "Matthew King",
    date: "30th December, 17:30",
    amount: 14725.0,
    coin: "USD",
    img: img5,
  },
  {
    id: "A1 Taxi Transportation",
    title: "Taxi ride to Airport",
    date: "15th January, 09:00",
    amount: -120.0,
    coin: "USD",
    img: img1,
  },
  {
    id: "B2 Taxi Transportation",
    title: "Taxi ride to train station",
    date: "20th February, 14:30",
    amount: -230.5,
    coin: "EUR",
    img: img2,
  },
  {
    id: "C3 Taxi Transportation",
    title: "Taxi ride to downtown",
    date: "10th March, 18:00",
    amount: -345.0,
    coin: "USD",
    img: img3,
  },
  {
    id: "D4 Taxi Transportation",
    title: "Taxi ride to Convention Center",
    date: "25th April, 08:00",
    amount: -190.0,
    coin: "EUR",
    img: img4,
  },
  {
    id: "E5 Taxi Transportation",
    title: "Taxi ride to University",
    date: "1st May, 16:00",
    amount: -250.0,
    coin: "USD",
    img: img5,
  },
  {
    id: "F6 Taxi Transportation",
    title: "Taxi ride to mall",
    date: "15th June, 14:00",
    amount: -300.0,
    coin: "EUR",
    img: img1,
  },
  {
    id: "G7 Taxi Transportation",
    title: "Taxi ride to beach",
    date: "20th July, 10:00",
    amount: -210.0,
    coin: "USD",
    img: img2,
  },
  {
    id: "H8 Taxi Transportation",
    title: "Taxi ride to park",
    date: "5th August, 18:00",
    amount: -150.0,
    coin: "EUR",
    img: img3,
  },
  {
    id: "I9 Taxi Transportation",
    title: "Taxi ride to restaurant",
    date: "15th September, 15:00",
    amount: -320.0,
    coin: "USD",
    img: img4,
  },
  {
    id: "J10 Taxi Transportation",
    title: "Taxi ride to hotel",
    date: "1st October, 12:00",
    amount: -280.0,
    coin: "EUR",
    img: img5,
  },
]

let accountTransactionsCounters = {
  [0]: 1,
  [1]: 1,
  [2]: 1,
  [3]: 1,
  [4]: Transactions.length-5
}

mock.onGet(/\/accounts\/\d+\/transactions/).reply<Transaction[]>(config => {
  const [, id] = config.url.match(/\/accounts\/(\d+)\/transactions/)
  const res = Number(id)=== 4 ? Transactions : Transactions.slice(-Math.min(accountTransactionsCounters[id]++, 5))
  return [200, res]
})
