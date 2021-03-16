$('.navbar').hide(100);
let Js = $('#search').click(function() {
  let input = $('#text').val();
  $('.navbar').show(2000);
  if (input == '') {

  } else {
    let m = 1;
    $('#data').html('');
    fetch(`https://api.pexels.com/v1/search?query=${input}`, {
      headers: {
        Authorization: '563492ad6f91700001000001d2bcff0afe5d4ee69fc40110d1d3d15b'
      }
    }).then(res => 
      res.json()
    ).then(data => {
      let dat = data.photos;
      $.each(dat, function(key, value) {
        let img = value.src.large;
        $('#data').append(`<a href='${img}'><img src='${img}' class='img-fluid my-2 p-3 shadow'></a>`)
        
      })/*
      for(var x in data){
     console.log(data[x].photos);
      }*/
    })
    //pages next

    $('#next').click(function() {
      m += 1;
      fetch(`https://api.pexels.com/v1/search?query=${input}&page=${m}`, {
        headers: {
          Authorization: '563492ad6f91700001000001d2bcff0afe5d4ee69fc40110d1d3d15b'
        }
      }).then((res) => {
        return res.json()
      }).then((data) => {
        let dat = data.photos;
        console.log(m)
        $('#data').html('')
        $.each(dat, function(key, value) {
          let img = value.src.large;
          $('#data').append(`<a href='${img}'><img src='${img}' class='img-fluid my-2 shadow p-3'></a>`)
        })
      })
    })
    //previous page
    $('#previous').click(function() {
      m -= 1;
      fetch(`https://api.pexels.com/v1/search?query=${input}&page=${m}`, {
        headers: {
          Authorization: '563492ad6f91700001000001d2bcff0afe5d4ee69fc40110d1d3d15b'
        }
      }).then((res) => {
        return res.json()
      }).then((data) => {
        let dat = data.photos;
        console.log(m)
        if (m == 0) {
          m = 2;
        }
        $('#data').html('')
        $.each(dat, function(key, value) {
          let img = value.src.large;
          $('#data').append(`<a href='${img}'><img src='${img}' class='img-fluid my-2 shadow p-3'></a>`)
        })
      })
    })

  }
})





export { Js }