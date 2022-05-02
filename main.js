const changeSocialMidia = {
  github: 'EdDiass',
  youtube: '',
  faceebok: '',
  instagram: '_duardo_dias',
  twitter: ''
}

function changeSocialMidiaNew() {
  for (let li of SocialMidiasNew.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${changeSocialMidia[social]}`
  }
}

changeSocialMidiaNew()

function GetInfGitHubProfile() {
  const url = `https://api.github.com/users/${changeSocialMidia.github}`

  fetch(url)
    .then(answer => answer.json())
    .then(data => {
      /* UserName.textContent = data.name */
      UserNameGit.textContent = data.bio
      UserLinkGit.href = data.html_url
      UserNameGit.src = data.avatar_url
      UserNamePerfil = data.login
    })
}

GetInfGitHubProfile()
