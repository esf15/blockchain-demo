var difficulty = 3;        // number of zeros required at front of hash
var maximumNonce = 500000; // limit the nonce to this so we don't mine too long

// NOTE: Because there are 16 possible characters in a hex value, each time you increment
// the difficulty by one you make the puzzle 16 times harder. In my testing, a difficulty
// of 6 requires a maximumNonce well over 500,000,000.

/////////////////////////
// global variable setup
/////////////////////////
var pattern = '';
for (var x=0; x<difficulty; x++) {
  pattern += '0';
}

/////////////////////////
// functions
/////////////////////////
function sha256(block, chain) {
  // calculate a SHA256 hash of the contents of the block
  return CryptoJS.SHA256(getText(block, chain));
}


function init() {
  $("body").css
}



init();

function updateState(block, chain) {
  // set the well background red or green for this block
  if ($('#block'+block+'chain'+chain+'hash').val().substr(0, difficulty) === pattern) {
    $('#block'+block+'chain'+chain+'well').removeClass('well-error').addClass('well-success');
  }
  else {
    $('#block'+block+'chain'+chain+'well').removeClass('well-success').addClass('well-error');
  }
}

function updateHash(block, chain) {
  // update the SHA256 hash value for this block
  '000'+$('#block'+block+'chain'+chain+'hash').val(sha256(block, chain));
  updateState(block, chain);
}

function updateChain(block, chain) {
  // update all blocks walking the chain from this block to the end
  for (var x = block; x <= 5; x++) {
    if (x > 1) {
      $('#block'+x+'chain'+chain+'previous').val($('#block'+(x-1).toString()+'chain'+chain+'hash').val());
    }
    updateHash(x, chain);
  }
}

function contractName(block, chain, tx) {
    changeWallet(block, chain, tx);
}

function changeWallet(block, chain, tx) {
  var nomesAleatorios = 
              [['Carla', 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C'], 
              ['Itamar', '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6'], 
              ['Solange', '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD'],
              ['Eduardo','39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4'],
              ['Satoshi Nakamoto'], 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E'];
    
    var wallet = $('#block'+block+'chain'+chain+'tx'+tx+'from').val();
    var newName = "";

    if(wallet === 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C') {
      changeName('Carla', block, chain, tx);
    } else if (wallet === '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6' ) {
      changeName('Itamar', block, chain, tx);
    } else if (wallet === '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD' ) {
      changeName('Solange', block, chain, tx);
    } else if (wallet === '39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4' ) {
      changeName('Eduardo', block, chain, tx);
    } else if (wallet === 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E' ) {
      changeName('Satoshi Nakamoto', block, chain, tx);
    } else {
      changeName('', block, chain, tx);
    }

    
}

function contractName(block, chain, tx) {
  changeWallet(block, chain, tx);
}

function changeWallet(block, chain, tx) {
var nomesAleatorios = 
            [['Carla', 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C'], 
            ['Itamar', '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6'], 
            ['Solange', '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD'],
            ['Eduardo','39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4'],
            ['Satoshi Nakamoto'], 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E'];
  
  var wallet = $('#block'+block+'chain'+chain+'tx'+tx+'from').val();
  var newName = "";

  if(wallet === 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C') {
    changeName('Carla', block, chain, tx);
  } else if (wallet === '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6' ) {
    changeName('Itamar', block, chain, tx);
  } else if (wallet === '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD' ) {
    changeName('Solange', block, chain, tx);
  } else if (wallet === '39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4' ) {
    changeName('Eduardo', block, chain, tx);
  } else if (wallet === 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E' ) {
    changeName('Satoshi Nakamoto', block, chain, tx);
  } else {
    changeName('', block, chain, tx);
  }

  
}

function changeName(newName, block, chain, tx) {
  $('#block'+block+'chain'+chain+'tx'+tx+'from').val(newName);
}



function contractNameto(block, chain, tx) {
  changeWalletto(block, chain, tx);
}

function changeWalletTO(block, chain, tx) {
var nomesAleatorios = 
            [['Carla', 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C'], 
            ['Itamar', '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6'], 
            ['Solange', '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD'],
            ['Eduardo','39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4'],
            ['Satoshi Nakamoto'], 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E'];
  
  var wallet = $('#block'+block+'chain'+chain+'tx'+tx+'from').val();
  var newName = "";

  if(wallet === 'AD8D83FFD82B5A8ED429E8592B5CB3E6E83A033770868A1A00C6FD1E7FAE242C') {
    changeNameTo('Carla', block, chain, tx);
  } else if (wallet === '26DDA94DB37658833998316E1B3F9B19704D48AED3A6F1FFF1F775C4A8C77ED6' ) {
    changeNameTo('Itamar', block, chain, tx);
  } else if (wallet === '3C56715664A646445083CD44011B309C0B423149DCE60BEC272E825E3115C0DD' ) {
    changeNameTo('Solange', block, chain, tx);
  } else if (wallet === '39981B0880B1956BFCCBBA9260BB848CCD28ED2651E11553C53489847A252BA4' ) {
    changeNameTo('Eduardo', block, chain, tx);
  } else if (wallet === 'A0DC65FFCA799873CBEA0AC274015B9526505DAAAED385155425F7337704883E' ) {
    changeNameTo('Satoshi Nakamoto', block, chain, tx);
  } else {
    changeNameTo('', block, chain, tx);
  }

  
}

function changeNameTo(newName, block, chain, tx) {
  $('#block'+block+'chain'+chain+'tx'+tx+'to').val(newName);
}

function mine(block, chain, isChain) {
  for (var x = 0; x <= maximumNonce; x++) {
    
    $('#block'+block+'chain'+chain+'nonce').val(x);
    $('#block'+block+'chain'+chain+'hash').val(sha256(block, chain));
    if ($('#block'+block+'chain'+chain+'hash').val().substr(0, difficulty) === pattern) {
      if($('#block'+block+'chain'+chain+'mineButton').val() === "1") {
        alert('bloco já minerado!');
        return null;
      }
      if (isChain) {
        $('#block'+block+'chain'+chain+'mineButton').val(1);
        updateChain(block, chain);
      }
      else {
        updateState(block, chain);
      }
      break;
    }
  }
}
