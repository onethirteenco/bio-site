async function fetchLastCommit() {
    try {
        console.log('Fetching last commit...');
        const response = await fetch('https://api.github.com/repos/onethirteenco/bio-site/commits/main');
        
        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received commit data:', data);
        
        if (data.commit) {
            const commitDate = new Date(data.commit.author.date);
            const formattedDate = new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
                Math.ceil((commitDate - new Date()) / (1000 * 60 * 60 * 24)),
                'day'
            );
            
            const lastUpdateLink = document.getElementById('last-update');
            const lastUpdateTime = document.getElementById('last-update-time');
            
            lastUpdateTime.textContent = formattedDate;
            lastUpdateLink.href = data.html_url;
            console.log('Updated last commit time:', formattedDate);
        } else {
            throw new Error('No commit data found in response');
        }
    } catch (error) {
        console.error('Error fetching last commit:', error);
        const lastUpdateTime = document.getElementById('last-update-time');
        lastUpdateTime.textContent = 'Unable to load';
    }
}

// Fetch last commit when the page loads
document.addEventListener('DOMContentLoaded', fetchLastCommit); 