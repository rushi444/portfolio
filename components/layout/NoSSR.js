import dynamic from 'next/dynamic'

const NoSsr = props => <>{props.children}</>

export const NoSSR = dynamic(() => Promise.resolve(NoSsr), { ssr: false })
