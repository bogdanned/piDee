import { IConstraint } from 'jolocom-lib/js/interactionTokens/interactionTokens.types'

/**
 * The seed to instantiate a vaulted key provider and password for seed encryption / decryption
 * The need to persist the seed in clear text will be addressed in the next minor release
 */
export const seed = Buffer.from('027d14ecb7a0d28ceebefed75931dc5fda05ae385af2807f3fabb3b9827a4c3a', 'hex')
export const password = 'correct horse battery staple'

/** Where is your service deployed. E.g. https://demo-sso.jolocom.com */
export const serviceUrl = 'http://192.168.16.151:9000'

/** What credentials do you require during authentication, and associated constraints */
export const credentialRequirements = [
  {
    type: ['Credential', 'ProofOfNameCredential'],
    constraints: [] as IConstraint[]
  }
]
