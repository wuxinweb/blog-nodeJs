async function get_fun(ctx, next) {
  ctx.state = {
    title: "算是是--"
  }
  // render 默认使用 state 中的属性 且如果 state中有参数就不再取传递的参数
  await ctx.render('reg', {
    title: "21"
  });
}

module.exports = {
  "GET /test": get_fun
}