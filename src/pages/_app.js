import { ProviderAlert } from '@hooks/useAlert'
import { ProviderAuth } from '@hooks/useAuth'
import MainLayout from '@layout/MainLayout'
import '@styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <ProviderAlert>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderAlert>
      </ProviderAuth>
    </>
  )
}

export default MyApp
