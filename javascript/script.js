document.addEventListener('DOMContentLoaded', function() {
  const tiles = document.querySelectorAll('.tile');

  // Iterate over each tile
  tiles.forEach(tile => {
      // Add click event listener to open modal
      tile.addEventListener('click', openModal);

      // Add keydown event listener to check for Enter key press
      tile.addEventListener('keydown', function(event) {
          if (event.key === 'Enter') {
              openModal();
          }
      });
  });

  // Function to open modal
  function openModal() {
      // Get genre id and modal elements
      const genreId = this.id;
      const modal = document.getElementById('modal');
      const genreTitle = document.getElementById('genre-title');
      const songsList = document.getElementById('songs');
      const artistsList = document.getElementById('artists');

      // Populate modal content based on genre
      switch (genreId) {
          case 'now':
              genreTitle.textContent = '(Now) - Pop and Hip Hop';
              populateModalContent(songsList, artistsList, ['50 Cent – “Many Men', 'Clipse – “Grindin”', 'Nas – “Made You Look”', 'Common – “The Light”', 'OutKast – “B.O.B.”'], ['Outkast', 'Eminem', 'Coldplay', 'Radiohead', 'Kanye West']);
              break;
          case '90s':
              genreTitle.textContent = '1990’s - Teen-Pop and Hip-Hop';
              populateModalContent(songsList, artistsList, ['Pete Rock & CL Smooth - They Reminisce Over You (T.R.O.Y.)', 'Wu-Tang Clan - C.R.E.A.M.', 'Geto Boys - Mind Playing Tricks On Me', 'Nas - N.Y. State Of Mind', '2Pac - Dear Mama'], ['Leaders of the New School', 'Das EFX', 'Diamond D', 'Snoop Dogg', 'Dr. Dre']);
              break;
          case '70s':
              genreTitle.textContent = '1970’s - Disco Music';
              populateModalContent(songsList, artistsList, ['The Village People - Y.M.C.A', 'Michael Jackson - Dont Stop Till You Get Enough.', 'Bee Gees - Stayin Alive.', 'Boney M - One Way Ticket.', 'Kool and the Gang - Hollywood Swining'], ['The Bee Gees', 'Gloria Gaynor', 'Diana Ross', 'ABBA', 'Donna Summer']);
              break;
          case '50s':
              genreTitle.textContent = '1950\'s - R&B, Blues, Classic Pop, Country, Jazz, and Rock \'n\' Roll';
              populateModalContent(songsList, artistsList, ['Ray Charles - What’d I Say', 'James Brown - Please, Please, Please', 'Fats Domino - Ain’t That A Shame', 'Little Richard - Tutti Frutti', 'The Platters - The Great Pretender'], ['Ray Charles', 'James Brown', 'Fats Domino', 'Little Richard', 'The Platters']);
              break;
          case '40s':
              genreTitle.textContent = '1940’s - Country';
              populateModalContent(songsList, artistsList, ['Gene Autry - Back in the Saddle Again', 'Bob Wills - New San Antonio Rose', 'Roy Acuff - Wabash Cannonball', 'Hank Williams - Move It On Over', 'Ernest Tubb - Walking the Floor Over You'], ['Gene Autry', 'Bob Wills', 'Roy Acuff', 'Hank Williams', 'Ernest Tubb']);
              break;
          case '20s':
              genreTitle.textContent = '1920’s - Jazz';
              populateModalContent(songsList, artistsList, ['Louis Armstrong - West End Blues', 'Duke Ellington - Black and Tan Fantasy', 'Bessie Smith - Downhearted Blues', 'Fletcher Henderson - Copenhagen', 'King Oliver - Dipper Mouth Blues'], ['Louis Armstrong', 'Duke Ellington', 'Bessie Smith', 'Fletcher Henderson', 'King Oliver']);
              break;
          case '1900s':
              genreTitle.textContent = '1900’s - Operas';
              populateModalContent(songsList, artistsList, ['Carmen - Georges Bizet', 'La Traviata - Giuseppe Verdi', 'The Marriage of Figaro - Wolfgang Amadeus Mozart', 'Madama Butterfly - Giacomo Puccini', 'The Barber of Seville - Gioachino Rossini'], ['Giuseppe Verdi', 'Wolfgang Amadeus Mozart', 'Giacomo Puccini', 'Georges Bizet', 'Richard Wagner']);
              break;
          default:
              break;
      }

      // Display modal
      modal.style.display = 'block';
  }

  // Function to populate modal content
  function populateModalContent(songsList, artistsList, songs, artists) {
      songsList.innerHTML = '';
      artistsList.innerHTML = '';

      // Populate songs list
      songs.forEach(song => {
          const li = document.createElement('li');
          li.textContent = song;
          songsList.appendChild(li);
      });

      // Populate artists list
      artists.forEach(artist => {
          const li = document.createElement('li');
          li.textContent = artist;
          artistsList.appendChild(li);
      });
  }

  // close button in the modal
  const closeButton = document.getElementById('close');
  const modal = document.getElementById('modal');
  const overlay = document.getElementById('overlay');

  // Function to close modal
  function closeModal() {
      modal.style.display = 'none';
      overlay.style.display = 'none';
  }

  // Event listener for Escape key
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
          closeModal();
      }
  });

  // Event listener for close button
  closeButton.addEventListener('click', function() {
      closeModal();
  });

  // Event listener for overlay click
  overlay.addEventListener('click', function() {
      closeModal();
  });
});
