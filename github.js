class Github {
  constructor() {
    this.client_id = '21d3f9f37ff02067e771';
    this.client_secret = 'dab3273c20c4fc9a21c3f540dd4539d9cd6d0ef7';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  } 

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, 
      repos
    }
  }
}