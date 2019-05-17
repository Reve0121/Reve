<template>
  <div class="flex">
    <div class="user-profile">
        User Profile
        <div id="test">
          test
          <a href="">
            <a>aaaaa</a>
            <a>bbbbb</a>
          </a>
          <a href="">
            <p>1</p>
            <p class="font">2</p>
          </a>
        </div>
    </div>
    <div class="user-avatar">avatar</div>
  </div>
</template>

<script>
export default {
  name: "Profile"
};
</script>
<style lang="scss" scoped>
.user-profile {
  width: 60%;
  padding: 10px 15px;
}
.user-avatar {
  width: 40%;
  padding: 10px 15px;
}
#test{
  margin-top: 10px / 10px + 20px;
}

@mixin does-parent-exist {
  @if & {
    &:hover {
      color: red;
    }
  } @else {
    a {
      color: red;
    }
  }
}

#test a{
  @include does-parent-exist;
}

$pColor : blue !default;

p{
  color:$pColor;
}
$pColor:#0121;
.user-avatar{
  color:$pColor;
}
</style>
