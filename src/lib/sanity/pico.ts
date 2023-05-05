import PicoSanity from 'picosanity'

export const client = new PicoSanity({
  projectId: 'nk528ugs',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})