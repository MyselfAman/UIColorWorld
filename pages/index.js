import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/card'
export default function Home() {
  const redColorCards ={
    "ColorCards":[
      {
        "id": "1",
        "hexDecimalCode": "#FF6263"
      },
      {
        "id": "2",
        "hexDecimalCode": "#DE4839"
      },
      {
        "id": "3",
        "hexDecimalCode": "#BF3325"
      },
      {
        "id": "4",
        "hexDecimalCode": "#E21717"
      },
      {
        "id": "5",
        "hexDecimalCode": "#BF3312"
      },
      {
        "id": "6",
        "hexDecimalCode": "#D82E2F"
      },
      {
        "id": "7",
        "hexDecimalCode": "#EB4D4B"
      },
      {
        "id": "8",
        "hexDecimalCode": "#EB4D4B"
      },
      {
        "id": "9",
        "hexDecimalCode": "#EF5354"
      },
      {
        "id": "10",
        "hexDecimalCode": "#B4161B"
      },
      {
        "id": "11",
        "hexDecimalCode": "#E6425E"
      },
      {
        "id": "12",
        "hexDecimalCode": "#B9345A"
      }
    ]
  }
  const blueColorCards ={
    "ColorCards":[
      {
        "id": "1",
        "hexDecimalCode": "#1B98F5"
      },
      {
        "id": "2",
        "hexDecimalCode": "#23C4ED"
      },
      {
        "id": "3",
        "hexDecimalCode": "#383CC1"
      },
      {
        "id": "4",
        "hexDecimalCode": "#12B0E8"
      },
      {
        "id": "5",
        "hexDecimalCode": "#51E1ED"
      },
      {
        "id": "6",
        "hexDecimalCode": "#207398"
      },
      {
        "id": "7",
        "hexDecimalCode": "#51E1ED"
      },
      {
        "id": "8",
        "hexDecimalCode": "#207398"
      },
      {
        "id": "9",
        "hexDecimalCode": "#46B2E0"
      },
      {
        "id": "10",
        "hexDecimalCode": "#3944F7"
      },
      {
        "id": "11",
        "hexDecimalCode": "#2827CC"
      },
      {
        "id": "12",
        "hexDecimalCode": "#5DA3FA"
      }
    ]
  }
  const greenColorCards ={
    "ColorCards":[
      {
        "id": "1",
        "hexDecimalCode": "#1FAA59"
      },
      {
        "id": "2",
        "hexDecimalCode": "#38CC77"
      },
      {
        "id": "3",
        "hexDecimalCode": "#02B290"
      },
      {
        "id": "4",
        "hexDecimalCode": "#50DBB4"
      },
      {
        "id": "5",
        "hexDecimalCode": "#3DBE29"
      },
      {
        "id": "6",
        "hexDecimalCode": "#4DD637"
      },
      {
        "id": "7",
        "hexDecimalCode": "#1C8D73"
      },
      {
        "id": "8",
        "hexDecimalCode": "#66AD47"
      },
      {
        "id": "9",
        "hexDecimalCode": "#6AC47E"
      },
      {
        "id": "10",
        "hexDecimalCode": "#6EC72D"
      },
      {
        "id": "11",
        "hexDecimalCode": "#22CB5C"
      },
      {
        "id": "12",
        "hexDecimalCode": "#00D84A"
      }
    ]
  }
  const yellowColorCards ={
    "ColorCards":[
      {
        "id": "1",
        "hexDecimalCode": "#E8BD0D"
      },
      {
        "id": "2",
        "hexDecimalCode": "#EDBF69"
      },
      {
        "id": "3",
        "hexDecimalCode": "#F4BE2C"
      },
      {
        "id": "4",
        "hexDecimalCode": "#EDC126"
      },
      {
        "id": "5",
        "hexDecimalCode": "#E5D68A"
      },
      {
        "id": "6",
        "hexDecimalCode": "#DDD101"
      },
      {
        "id": "7",
        "hexDecimalCode": "#D9D55B"
      },
      {
        "id": "8",
        "hexDecimalCode": "#F7CD2E"
      },
      {
        "id": "9",
        "hexDecimalCode": "#AF9D5A"
      },
      {
        "id": "10",
        "hexDecimalCode": "#C7C11A"
      },
      {
        "id": "11",
        "hexDecimalCode": "#F4CE6A"
      },
      {
        "id": "12",
        "hexDecimalCode": "#A77B06"
      }
    ]
  }
  const fancyColorCards ={
    "ColorCards":[
      {
        "id": "1",
        "hexDecimalCode": "#8D3DAF"
      },
      {
        "id": "2",
        "hexDecimalCode": "#8D3DAF"
      },
      {
        "id": "3",
        "hexDecimalCode": "#758283"
      },
      {
        "id": "4",
        "hexDecimalCode": "#E03B8B"
      },
      {
        "id": "5",
        "hexDecimalCode": "#FF6666"
      },
      {
        "id": "6",
        "hexDecimalCode": "#5A20CB"
      },
      {
        "id": "7",
        "hexDecimalCode": "#242B2E"
      },
      {
        "id": "8",
        "hexDecimalCode": "#03C6C7"
      },
      {
        "id": "9",
        "hexDecimalCode": "#6A1B4D"
      },
      {
        "id": "10",
        "hexDecimalCode": "#CAD5E2"
      },
      {
        "id": "11",
        "hexDecimalCode": "#35BDD0"
      },
      {
        "id": "12",
        "hexDecimalCode": "#0D0D0D"
      }
    ]
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>UI Color World</a>
        </h1>

        <Card title="Feeling Red Today" cards={redColorCards}/>
        <Card title="Feeling Blue Today" cards={blueColorCards}/>
        <Card title="Feeling Green Today" cards={greenColorCards}/>
        <Card title="Feeling Yellow Today" cards={yellowColorCards}/>
        <Card title="Feeling Fancy Today "cards={fancyColorCards}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/MyselfAman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="ui color world Logo" width={72} height={56} />
          </span>
          &copy; by Aman Kumar
        </a>
      </footer>
    </div>
  )
}
