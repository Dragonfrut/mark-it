import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const username = 'User Name'
export const siteTitle = 'Mark-It'

export default function Layout({ children, login }) {
    return (
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {login ? (
            <>
              <h1 className={utilStyles.heading2Xl}>Login</h1>
            </>
          ) : (
            <>
              {/* Menu */}
              <i>Menu</i>
              <ul>
                  <li><Link href="#"><a>Profile</a></Link></li>
                  <li><Link href="#"><a>Subscriptions</a></Link></li>              
              </ul>

              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile-placeholder.png"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt={username}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{username}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!login && (
          <div className={styles.backToHome}>
            <Link href="/login">
              <a>← Logout</a>
            </Link>
          </div>
        )}
      </div>
    )
  }