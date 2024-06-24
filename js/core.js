 const characters = [
        { name: 'Ichigo Kurosaki', bankai: 'Tensa Zangetsu' },
        { name: 'Kisuke Urahara', bankai: 'Benihime' },
        { name: 'Izuru Kira', bankai: 'Wabisuke' },
        { name: 'Sosuke Aizen', bankai: 'Kyoka Suigetsu' },
        { name: 'Ulquiorra Cifer', bankai: 'Sonído Master' }
        
    ]
  const button = document.getElementById('bankaiButton');
  button.addEventListener('click', showBankai);
  function showBankai(){
    characters.forEach((characters)=>console.log(characters.name +" "+ characters.bankai))
  }
  