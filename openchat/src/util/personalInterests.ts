import personalInterestsJson from '../../personal-interests.json'

const loadPersonalInterests = (): string[] => {
  const personalInterests: string[] = personalInterestsJson.data.map<string>(
    interest => interest.title
  )

  return personalInterests
}

export default loadPersonalInterests
