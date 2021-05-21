$(window).load(function(){
$('.banner').addClass('loaded');
});

.banner{
  width: 100%;
  height: 200px;
  background-image: url(https://source.unsplash.com/user/erondu);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: 100%;
  color: #fff;
  transition: all 5s cubic-bezier(0.47, 0, 0.745, 0.715);
  -webkit-transition: all 5s cubic-bezier(0.47, 0, 0.745, 0.715);
}
.banner.loaded{
  background-position-y: 0%;
}