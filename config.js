const path = require('path')

module.exports = {
  build: {
    locales: ['arg','cl','co','en','es','mx','pe','pt','py','do'],
    colors: ['63A6AD','339933','996699','CC9933','CC9966','6699CC','333399','CC3333','669999','666699','CC6699','99CC99','FFCC33','CC6600','993333']
  },
  dev: {
    env: { NODE_ENV: '"development"' },
    assetsSubDirectory: 'img',
    locale: 'es',
    color: '#63A6AD'
  }
}
