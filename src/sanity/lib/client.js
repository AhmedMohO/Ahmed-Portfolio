import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: 'sk59pdlqXG3PQprBBQXk0YPFanpaOL8VrScnTojUFU0zNXu5MzelWF6BJsCnN5Vw2QbJDWaabToBNvuf8dRYEUjiitAXv0CP84K27leNVlSDX17yXisnRk27SQykQaRPva5AnOELSCrwMDRCpSzVtCoA3tJaJMA9yFIZCo7XgCCQKI3494Vm'
})
