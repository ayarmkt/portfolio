(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(t,e,c){t.exports={card:"Card_card__3B_l6"}},29:function(t,e,c){t.exports={h2:"SectionTitle_h2__2xDYq"}},3:function(t,e,c){t.exports={"skills-list-container":"Skills_skills-list-container__1Zpu3",rotateBackwards:"Skills_rotateBackwards__1ILyI",rotate:"Skills_rotate__23JiC",rotateForwards:"Skills_rotateForwards__5z3fg","skills-list":"Skills_skills-list__2nLKs",skill:"Skills_skill__19BMm",icon:"Skills_icon__26Cx7",html:"Skills_html__3ca7_",css:"Skills_css__3xGQ4",javascript:"Skills_javascript__1D3ay",react:"Skills_react__3lV9t",redux:"Skills_redux__3_XwJ",firebase:"Skills_firebase__2urFn",figma:"Skills_figma__FRhWP"}},32:function(t,e,c){t.exports={footer:"Footer_footer__2JjfG"}},4:function(t,e,c){t.exports={about:"About_about__2XAAt",sticky:"About_sticky__oylII",title:"About_title__15-Zd",text:"About_text__3zyr5","profile-pic":"About_profile-pic__1Iwi4","contact-list":"About_contact-list__3Srts",link:"About_link__2MHqf",icon:"About_icon__30fD8",github:"About_github__165l0",linkedin:"About_linkedin__WBJxg",twitter:"About_twitter__2q8FQ",blog:"About_blog__2fxAA"}},41:function(t,e,c){},5:function(t,e,c){t.exports={nav:"HamburgerMenu_nav__1OHWL",links:"HamburgerMenu_links__3zYvD",open:"HamburgerMenu_open__18Y13",link:"HamburgerMenu_link__1VTet",icon:"HamburgerMenu_icon__3XsRu"}},57:function(t,e,c){"use strict";c.r(e);var a=c(2),n=c.n(a),s=c(16),i=c.n(s),r=c(8),o=(c(41),c(10)),l=c(6),j=c.n(l),u=c(1),d=n.a.createContext({mobile:!1,navIsSticky:!1,setMobile:function(){},setNotMobile:function(){},setNavIsSticky:function(){},setNavIsNotSticky:function(){}}),m=function(t){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),n=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(r.a)(i,2),l=o[0],j=o[1],m={mobile:n,navIsSticky:l,setMobile:function(){s(!0)},setNotMobile:function(){s(!1)},setNavIsSticky:function(){j(!n)},setNavIsNotSticky:function(){j(!1)}};return Object(u.jsx)(d.Provider,{value:m,children:t.children})},b=d,p=function(){var t=Object(a.useContext)(b),e=function(){1<window.scrollY?t.setNavIsSticky():t.setNavIsNotSticky()};Object(a.useLayoutEffect)((function(){return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return Object(u.jsxs)("nav",{className:"".concat(j.a.nav," ").concat(t.navIsSticky?j.a.sticky:""),children:[Object(u.jsx)("div",{className:j.a.icon,children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUwAAAD+CAYAAABRGzyVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAACDASURBVHgB7d1bcFzVuSfwb629+ya1rpaN5AvI8k2WGUJsh2FiUmEG1zlzistkpqDm5fCQB17OzHEwpJLK0/BGkRMugao8jB9mqjhv8DBVmIfU2FWZmriKAdthcrCwMZEECMnYRhe7pd7dvfdeZ39tt48sdGl177177b3/v5SCHQQVjPzXt9b3rbUEAdw2+JPZ7js/mZuzJv6w0yIAuEMQJNLgo+PZXD49UiE5ZEh3SCnqWf45rnAtoeSMIDVHiqaUyk6ZdmHu098PTlNI+P9npiM34JJ9wPty3SkMY9SqlM5/+f59swQQMgRmwnAApbtzR1y38ohUMksN4CCVZHgB6k6Tm/2LnyHKVW7OXhyyhdoqhBwgpYZW/kw1qtzs2cvv931KACFBYCbI3p9ceayZoFyPIpoSQlgcpEJR0SAxa6tMUUr7rqW965pZU5RyZUk5qVSPUkZWCHdACbd3o//flKBZ5dKpsrLHUXVC0BCYCXDv41/0ZKT5t96/7K0UY66U58p2+TSCE4KCwIy53U9cO0jSejKoqlJLQox5e6+nLr3XP04APkJgxtjeJ648RsI5SglVW65/fnLbeQLwAQIzppIelkshOMEvCMwYQliuDMEJzUJgxgzCcn0ITmgUAjNGEJYb5DWHLKfyLrrqUC8EZkzs/pvpEWm6zxJsGMaRoF4IzBjgOcu0IY8lanQoCIZx6rP/1X+aAFaBwIy46lC6YT4nVjgLDhuH/U1YCwIz4nb/ZPJZ6YgRAl9hmQ4rQWBGGJo8wUK1CcshMCOKl+JZaf6CIHCoNqEGgRlBfEVbqjN9DPuW4UG1CQyBGUG7n5p8RipxkCB0XG3a89ZJ3EafTAjMiNn1+BeHDGk+TdAyXG2WHPsElujJg8CMEIwQaQZzm4kjCSIjbRhHEZYacZyje/7j5BO8p0yQCKgwIwJLcX1hiZ4cqDAjgJfi0jAfI9ASV/28VbL/rycGCGINgRkBWIrrj//9OOnUsX1PfX2EILYQmJq77z9dG8AIUXQoRU/w65wEsYTA1FzaLuPKtqjxmkEIzXhCYGqMz4pjKR5RXmju/g/TaNLFDAJTU9zocWXlEYLIkq57CKEZLwhMTXGjBxcCRx9CM14QmBryfoONoNETHwjN+EBgakgo9wmCWEFoxgMCUzO7nvr6CBo98cShyUcpCSILgamR6okeIgw+x5iwxRGMHEUXAlMjONGTEI5zFCeCogmBqYlqdYlGT2LwiaA9j38xRBApCExNpKWBva2EEUI+y98oCSIDgakBvrpNEp7KTRwhs3zLEe7TjA4EpgZwdVty8Z51uiP1DEEkIDBbjKtLNHqSToygCRQNCMwWwsXAUIMmUDQgMFsoKzIHUV3CHYb5NPYz9YbAbJFqd1Q4RwngNv7maXZlMS2hMQRmi/CQOgEsUz1z/jfTmJjQFAKzBTCkDmuRhv0MluZ6QmC2AKpLWJOQWSzN9YTADBmqS6hH9WYjdM21g8AMWVakcCci1Addc+0gMEO078krO71WKKoGqEv1FFB3CgPtGjEJQuMK5xnvNwFEnOp2sipNpuxwsyqlTNFOt6rAnFv9o0qRKUxV/b0lcmrVClFVhE38n5qisG79UVpkC1uVlC2K4vFd/+fzz5x7jWsTO3daBC0lCELBRyANaWI5HgEciGKTm+cwlN0qrzj8OlReeD/34i/0JbLoVJNim/O5q8iSkqaEKy3HoKl0KjPllBbnPj08Mk0QCgRmSPY89fUvcKpHcz+yhmmL6iNDabfyErucD0RarV5hSmNKkTtNDk1L4Y4hRIOBwAwBqssI4LAccPtJUyJDc2LI/rjez69Vo8oVo5SmqUvfGx4naBr2MENQvWADe5f60jwsmSpRN90U3aJDzdXz+VJ4WweKhgQ3GStEez/61BKGuCBdY6y4yRzFfmhjUGEGDNWlvkTGNd0flofFZrePImCjVebafzMaE8o8t1Asjn/5owdmCeqCCjNgqC71xI0d+mHlfpF38xQRG60y1/6b0ZAie6gtl6L9H10aJSEvfHp4z3mCNaHCDBCqSz1xWMoflx9UGRW5oXCRpytih32RAqCUmCWDxooL5dOoOleGwAwQOuMaGrb76UBlt46d8HrJfc4fSSqbguQt2ZUpTqFZdDcEZkBQXeqF9yvp+5VBda+znaKu252QA+4EhYCrTimMU1iu34LADAiqS324W5y8PFwZpgjtV67Jqy7lHveDwKvMJRCctyAwA4DqUg9cVar77e20yx6kmBEDzieiW12nkCU9OBGYAUB12Xpqh90tD1aGo9jYqYevI0YNqDaI0vRO0vY4EZg+Q3XZWhyUYrgySD2qm2IulObPOpQU55LUVUdg+gzVZWskKSjvCLH5sx4p5anRg/tOU8whMH2E6jJctT1Ksd3pj+vSey3CJEvssT8gTfAyvWiVT8S52kRg+gjVZfCqxxm3uPlqNdlJ+SjPU/rB+2bxsS8nf3wU52oTgekTVJfBqjZxtjl9apvbn/SQXKp2VyZpJq7VJgLTJ6gu/YeQXJ9uy/LlDCVOXvjB8BmKCQSmD1Bd+ufO7OSgsx0hWad73bOy3S2QpriTXurJnIzDlXL4gvSBTjcSpc2Kmc8sZDfn57qz6XLWlLaZSZXuaoiUKhmrYLUV5or5wjc3+rTY/6p1uVWSutx+uUF91E7aBqZw1aHM9dLQvf/3z5FfoqPCbJIO1eU9nde7+zpmu7tyhe7OzMKGAqdsp615Kz936cp9E4VSe+gVQKzOeLdIq4fY68a3wBvmO6MH94xSRCEwm9SqvUsOyf6umb4t+ev9hnR9WSlcK/ReCTM4434aJ0w6DLHXK8pddARmE8KuLnm5veeeie1bO69t9yskl+OKc2JmYGLs2o4rFKTvVbbTvspuAl+06mx5wwSduXho/0mKGARmE8KqLrma3LXlq8GNLrebMX2jb/L/fzUczLgKwtJ3uo4XrUUoNVrsy70TpWYQArNBQVeXtWrynvxMv/fjlixZi5Vs4dwX+z/xc4levWrt0dJhAn+lVEHuds5S1EhjanHB+seoNIMkQUOqnfEAcFAe2HZ58Md7Pnp4R/c3g60KS5ZLWfmHBi88yF138gE/DWH8m/L9BP6riDy5InpTL66zNZdNP+d10CMxw4wKswFBVJdh7E82ivc1P57c+8nMQndzoysReM42ynQ8JlmvqJwMQoXZAD+ry+UVpW5hydJmOXvovtEHd/R80/BztNVXGhGWwVoUkb1RXgjVE4VKExXmBvlVXepcUa5lfGbb55emd07SRqG6DF5OXZeDzicUYbpXmjjps0HNnuqJalDW7Oz9ejefHrrw9Z6Jev8ari4FwjJwohLdCrOmVmkOjo+/qWP3HIG5AVxdNjpGFPWgXIq3DkzpmPWOHYl+HHcMg7IpK7jxE5EB9tVwaGZnKxyaJ3QLTexhboAhUgepAXvuGd+u8x5lIwY6r2//8d6zh+vpoIt9lUGCUKgFisfLmF73PDtjPUuaQWDWad+TV3aSUEMb+Wt44JxDZVff17vjEpRL1caO+J9ztc/h5TiOPoZHlUR8fq0VDQ2f+/QJ0ggCs05KuUfr/dzetrn8D3f/6cHv77j4IIcKxRh30Pmfkzv9K/15cZ/bcGcdNk6Uor+PeRdFR0bOXwpk5rkRCMw63PfX1wbqqS55n/J7Oy7ufmjnJ4fDPMaoA95u+Hf7Pnz4O0v0LTYCM0SqQrGr5l3XPbr/7GhD22F+Q2DWIZUpPbLe59RmKXlvjxKKq81Hdv/pYf61uBOcnTHZU4uIOHTKV6KUeFKHGU3MYa7j3se/6MlK8xer/Xnevzsw8JfhVh5h1BGfDvqLvfXqF4d67yUIldxv/4FiiGc0S32Zlo4bYaxoHWnDOLrS3CVXUA/s+Gw4aUvvenG1uWfTlwcGCt90fJneMj+V3rRAEApliazIqsg/B7FcddzoVuf8BLUIKsw1rFRdxmmeMmjlHtnj5GUH/7gkUzYH55yZLy3KTKTnBLWn+Rs/zWrlBcT4Db+G5dUllt8blBap2g8zrveNxvp6E//4mtm1MJ3uXZg1O2JXBWmh6O0ba/zGT7O4CbTnwz+PX37ogTEKGQJzFVxdSiWqnTksvxvjpii90v++2Z5v5w+uOm/IthLC01/Cif/vaynST7fi+CQCcxVcXaYNLL8bpSR532/EmlMYXHVududNDk+HpPejttKczFtXMpsWKsJwCRqiXDLjvtdWPXN+vfiM98O3KUQYK1oBV5c7uq5+/5Fd5w/H6ThjmNz0ytXlagxyZa9dyA2Vr/Tcvzi+maBhoiwTsWXkfUMeOfDRxSMUIgTmMi+99FL2Px/843/5V9su/1vsVTbBEA0XOZ3OYmbf4mQkbuCG1nJIHQ1zPhOBucRbr79+pKej45e2K7U5ihVVq+1f1qvfnunYUpnPEWyYctzkfKMXlG1rS4X2ciuWmp5XXnlla840H3eVGpotdvQ7TjKWNEFab/+yHntLX20qGNkrGEPaoCi+7dMMRUO8NL/wg+EzFLBEByYvv/s6Oo44QhytTQ/NFzsGCZpnqKa/tgzXlQeKX/R91L432DfSY0aohAUm3VmajwZ9U3til+Rv/cM/7Ozp6jrGYVn732YX86gu/WJIXxq1bY6Vxn4mrCukpXnivhNxVdnd0fGkK8RBUnefeUR16R/X8O9ri/czr9pdRcxqwpq8pfnI+csjowf3jFJAElVh1po6QojvXBWF6tJn0t+vrX3WZG9KOWhS1oGfqqCEchznicHx8cD++RNRYb788ss97en009zUoVWmXRasNjzS5SM/mj5L8ZD7fuvL3j/ndl4ngFXwQHt6tsyzmYGcNY/9d2yuKtvS6WPeb+BVLwAulLLdJTuFY48+UTKYr6ueys22+0pXOwhgDdJ1A5vNjG2FuXRUiNaZoZ5fzCf20t9ASBHYN+Idlatd11JdRYwawVpuN4B8vwYudoG50qjQekoOqks/KakCC0weNdpX/GrTn9p3f0MAq/EaQHs+/POQ3zcaxWpJvtKoUD06souTBL4Jaklew0cnsTSH9Rhm9nHyWSwqzNtV5VEvKI8sHxWqx6ZcYfLGYn6QIDJ4ac63uONWI1iV62zdf/bywU8P7zlPPol8hbmkqmz41hJpOHYuU8RpkgjhpTl3zQm+Syrs797mKmdDq831RLbCbLaqXK6v7cbEZCXTp1yJ8/VNUqYwKATcNe9J3cxioP1uQgoE5m08ZuRnlRnJCtOPqnK5dMq2sJcZPRho/y4lUGEu5WeVGalqyu+qcrnN+fkJq5TrKzsG3tKOCB5o3+41gMazA/MEt2BJfheuMv3qmEfmO3MQVeVK7um8/omQLr7gImSb/W1Hm1vCVkoNluTfYRgpX+641f7pD64qvaB8xqsoRygkfPLnm/lNDxI0xM6L9kqPsYlCxC9Rjrbd9y0BiU41KbY5nxPcxXErJ5qtMrWuMN/8zW9G+LKMMMOS5TPWXG9+/iJBZPBDaj32TVyewkyFJtgKzFR2PzVJy2VMrapUIQflUj1thSvcMZ9d7NhNsCHKbM3X1WDpmy50zD0ZBOZKlO0c9v7wPjVBuwqzVVXlSnrzNya3dMxhTzMi+AQQqkwvGFICgbkSQVlu/lATtKkwdagqV9KRW7ieMUtnp25sfhD3Zepvd2m6+yOzI7mHELwOuWx3CwQrur0sb3gfU4sKU6eqciU8o7m189rHOA2kP37SYmv523ZKqpRCWK7Bdd0D1ISWVpi6VpUrqYZm18zFmUJnYc5qH8SJIH3dW751zpySKEdzBKsSSvXwjewTO3c2tG3RsgqzNlepa1W5Gt7X3N517SyqTX3xMHtSq0yRVwjMdbTN2g3vY4ZeJQV9WicMtWpzdjE/xw+nYW/zbsKmljfJklhlCoMs0YHAXI/jOA3fxh5qYHJV6ZrmM45XFlMM8OgRf/ADaghOvXCVyR3zRI0ZYTleH4MGqEGhBGYcqsq1cGh2ZYrXvy3mty+U2vD6pCYSN5e52ZkgCFTggRm3qnI1fKcmX97BH6g49VCby0xEaGbcOZHFwHo9VBNZFFhgxr2qXAuW6vpISpUpNqsJgsAFEpj8YmM2nf7buFeV66kFJ1/mccNq6y+Wcnj7PGRcZfJNRnF+ZVLk6QqaPfUz3MYr8UACM2Oaj1PCw3IpvsyDP8oVc2Khku1G1Rmue8oz7XG9L5M749i73CDTnKEGBRKYgmgrwXfwOFI6dXfVaeFZjMDxfZmTasvNOD6YJnrdCcLe5Ya4tttwNR7Mb1QhUD2to1Z18o95r3OxlO3j8KQYELZySCP8YFqPXchcTXUVKU66vbDsc3GAYoNcVZ6mBvkemL97+eWeCsFG1PY6vSV7lpfsC17lWbJT3QS+2Va+1hmrwPTCUg54gQkb1swlwlgKamTpkh3h6S9u/vBjabFYliMsGyaUGqUmIDA1hfD0X9QfS6s2eAaci+iIN04YqXPUBARmBCwNT9cxzPlSrq9YSXfr2jCStp6PcPXZN3PjFM3ArL7Tc49XVZp4EbJRSonZ0YN79Kowc/39xcrsLEEw+ERRdc+TqLrZX+u2l+1MN0aV1tbmWumonfzhGUseG8IpnuZJYZyiJgXyauRvX331v6FTHr7FUipvVXLdi+VsXyuX7soUpjVgaDla9mV687z2y3J+V7xLTco+NYmK0h9cXV76wfCvqUmBLOcU0ayXxA3fCAKNactUCvzRSzcmeem+UM523yxn+kKvPl2lbWNF22V5ShUE3zbU6V7HHqX/0lb5BPkgqP0vbtsjMFuIl+78HhF/8M/DrD6FS9oGJi/LW35UkitIvrvSC0iVUwXZqa6jkgyO46rTF3/0gC/7hIEEpq3UdEoEstqHBmlTfWpgU2U+t5jZcpOC5gWjkN5vh7SaE6awORxFm7rrViH8LgmWK+TY5Yf2Nb13WRNIYG7atOnCjdnZpwm0FEb1KZRylRDaPePM+uwbbV/5EZi3A9Hl5bQgm9JkUYY/3IIwhF0LxlooIhzDxfuWmWLpXfJRYP8O33j11eeEEE29AQzhW1p9OnYqX3bMPDXA2mpsVYbQcmzNkdL9f+37p9YaYhemshSHIIehVx2S6Voq5YVgygvBlLecNr0/h2W0tjgsed/yn3xaitcE9gVtSDnqKoXAjJjl1WdtaJ7PupecVHccLgrxss7tMgrl69mO67WqsLp0TrnWSpVhjaBk3esaVa4iKxNAWLLAvvjz3d3nbszMHMV4UbQtHZrnn/PcZ7GU6S7Z/KHnqSMhXdvbC7CFUA7/mJfLUjoVKbx2lPdz/pz+zm8nZwbaJ+7666r/jVCMMg5LUSp6YXkwkGHwQLdVfvv6689G7RldqN9azaPyPcYWJx3kN0uv1vWqQincijTcsrdp6phSlZV0Xe+Let0ufSGXmzuza+RjgtgIahm+VKDLK0epMwYRAjOm1lq+l0V2Mz/P1zzlGl4QetuOFcFNFg5I0y2vFor1VgBtpVJDe7OgpzDCkvnxFb2q3//+97P//q/+ashr/uD29QQwDNfOpcqFztziVadduE5KpCSHHO/+qfUbQLx8NqVbNFPOgmE6C5m0PZfKVOZu/dy1uJK89fdrft3sdfHlTHvndSudLhNEmzSm0sXS/ww6LFngG/iuEKe9VEbzJ4E45AxyvQaKzQknHdvIuraRc5TI8J+XpCr8OetVjUHZfHO+e7Y9XyCILOW450ubsu9dPLg3lLP2gc/JvfDCC2NKqYYv7IRo8oLyrpEbDkPTdBbT2fK3uVxpij8yufI1M2XfrIYmhX86KG8tYlkeYXyC59K/PvDOxM6doV1MEsqICKrM5PGWvNrPKLaXLQRmBHEnXKnK283cnN6oUE5i3K4yzxOARrK2jZG3qPH2KzNW5c1WhCULbQi5q7f3vRszMyOYy0yGlOtof3+jdF0zb1nZQjaLuyajQNAZb6/yJLVQaGd9f/rTn1pSSt8OwQP4oWtxActyzfESXErz7YuH9rc0LFmolyP8/fHjZ9AASgYjAnuYzNvHxIpHZ7eX4M0+LeGX0M8Fp8vldyvp9DEszWMuIoGZtcv4OtSVBkvw5UK/fuvvfvWrWSzN4y9d0X8Pk5m2jYcANcOndhy3ckKHJfhyLbmvEEtz0AVGi/TCF/6W+jIt64Kvp2XfXbE0jzdTOZFYkptep5yg5aq3DJE49dnhfWdIYy27EZuX5iKVeocglmRE9jDTmMVsvduNnUs/GNY6LFlLnxA4duzYqJJS+18kaIygyIQmqsxW8Ro7Vk/qRBgXZ/ih5V8oXV1dp27OzAwpIfDKZMzwaJEt9HymYikOzLJp4rmJELXyeGMzWv5IFQ+0m+Xy215rDKctYiYqy3IIFzd2Wnm8sRlavOrH+5mOEG8TxItyIxGYbSUMr4dFKXHys0P7IrMEX06bZ1D5gg6H6DRBbBiuQIUJVTxbqaziW1Fo7KxFq3ejvdA8hVuN4kNEZLQIAuY1dni28tIjB6co4rTbkOdbjbwm0ACaQNG3/BJhSJbabOWlw9GuKpfSqsJkd5pAQkRyjwP+RRQuEYaARGi2ciO0C0xWPW9eLv8jOufRFoU7MSEAEZut3AgtA5P9/S9/OeUFpnaH7wFgZbwEr9iVd/nSjDDf2QmTtoHJfvbzn59D5zy6DNdFhZkQ3AXnJfhfHn7gHMWY1oHJqp1zHJ+MJNOJRtNnMYMnKppRferW64LHcQm+nPaByZ5//vmTuA4ueqSLpk/c8SB62E/dtlIkApN19faicx4xUbniDY+gbVxcBtE3KjKByeNGKcs6gdCMjiicJXelRBW8QXwWPG2VT8RhEH2jIhOYjMeNqqGJcaPIMJXejR8bgbkxgs5E+Sx4syIVmKw6o2nbCE3wRTmVxtdRHW5dxyZO6vjOTpgiF5gMM5rRITUfXq8IAxXmOni/UpSKJ5K2X7mSSAYm4xlNKQRCU3O631hUyGQLBKuTxlRS9ytXEtnAZPz6JAbb9ab7jUVWGkvy1fB8ZVyPODYq0oHJeLAdoakv3W8sKqQxUrQSx1WnkzRfWa/IBybDaSB96X5j0Vx7HkvyJWrnwS8/NHKK4DtiEZjs9mkgXD6sGZ1vLOIZTDx+9i9qzZ24nwdvRmwCkz3/4ovveBXNNAHUYRENnzs4LNHcWV+sApN19Pb+d4SmPnS+segmAvMWrxOelMszmhW7wOQjlByaOEKph3RF3yX5t22dc5Rw3Am/eHDvW2ju1Cd2gclw7hzqsZjJJDYkuLlT64QT1E1QjP3u5Zd7Ktnsc94GTQ9By4z1bnmUNMMNn/898v0/UkJwQJKUU8pxxonsscrmjilUlRsX68BkCM3WG+/d/IgiodULpbNtHdc/HNr7CcUY3yokyZ12nMooAtIfsQ9MVg3NdPqYt0TPEoTuy56+h20htfq1H+/r//yz/m2TFCMOiWlDqDFbOGN2T/sYAtJ/iQhM9tYrr2x1TfM5hGb4Jrt6HiwbqW7SyIc7952djfjQenVuUqpR74fTVm/2AgIyeIkJTIbQbI3pjt77iymzjzRRMk3rD8Pf+4AihgPSMWjMVGp8cbEy9iXGgEKXqMBkb7755oiy7WcJQnMl3zW8mM70kyau5TuvnB/cc5E0x40a1xAXDIemi1Z5FAHZeokLTPbb3/zmkNcxfJogFNfb84M3Mm2DpIlL92y7OLG5/wppBgGpv0QGJkNohmemrX37XLZ9N2nizO4DH+jw8Fl11IfUmCA5RqXFcRxL1F9iA5O99frrR1ylniAI1Hwu1/9trmOYNFDItc2d2bX/Y2qBpRUkAjKaEh2Y7LXXXjtqED1GEJhCKtN9taPrQdJAmMvxWpMGS+z4SHxgMoRm8Dg0Z/Idw62exwxyOb50zAdd7HhCYN6G0AxeWZrZq15ols3WzGT6uRyvHTXkkzQYFE8OBOYSCM1wzGfa+ufb2gbDrjabWY7zKRolaQr7j8mGwFwGoRkOrjYL2UxfIZPbHlZw1rscX7r36KryNM5hQw0CcwVvvPHGE8J1jxCEgivOQjbdVzbMbkUykEs6VhpW52BU3pJayuo1gNOqWJwubeuZQTjCahCYq3jj1VefEUIcJAjVotccWkynui1vn1MJaVakkacGCXJtQ5EtXce6PLD9/dH+ez+Vyp1DMEKjEJhrQGjqwQvPvOuFpyuE6YjVK1BDubZUyjYdxzK9P8ram+hCzP7s+PFfE0CTtLqjUDf8qJoXmoTQbK2sXWnqViFZqeAJZvBFLJ+o8FNXb+97eFQt2gzHGSUAHyAw11F7VA2hGU3e6uDc3/3qVxggB18gMOuA0Iwu07JOE4BPEJh1wvO90eN9gxtDdQl+QmBuAJ7vjRil0OwBXyEwN4grFoRmBHj/fo79/Odo9oCvEJgNQGjqzyA6RQA+Mwga8v7p09ZTjz466hhGTsjqWegcgR64ujx+/F0C8BlO+viEH1dzK5UD3i/oCF6lbC1DiHf+6/Hj5wnAZwhMn/2Pl17K3sjnDyghDgohhgjChWOQECAEZoB+9/LLPZVUaogM4zGvY9tDEDhUlxAkBGZI3nrlla2OaR7x9jt3IjyDwXOXx1588QQBBASB2QL8xC+W7P5LlUq/xqA6BAmB2UK8ZC+n00dRdTaPz4yjMw5BQ2BqAlVnc1BdQhgQmJq5U3XiDs66eV/Ep4+98AIG1SFwCExNocNeJ4wRQYgQmBGA5frqMEYEYUJgRsid0SQs16vQ6IGwITAjCN11qi7F+QIUNHogTAjMCKsdw0ziPieW4tAKCMyY4H3OpAQnluLQKgjMmHnttdeGpFKPxbZBhKU4tBACM6biOs/pEJ144YUXxgigBRCYMRen4MSAOrQaAjMhODitTOaQwcEZwX1OpdSZ51988SQBtBACM4Ei1yASYupnx4+/RQAthsBMsEgEpxeWnfPzJ3760ksWAbQYAhNqnfVD2u1zIixBMwhMuEOnE0TenuX5rps330NYgk4QmLCi2xd+8Ln1AQoZuuGgKwQmrCnUt4iEmHWUehdzlqArBCbU7XaTaMQLzhHyk1KWI8SZnhs3/oglOOgMgQkbxpd+3OztHXIrlQNNVZ4ISogYBCY0jZtFdnv7gBegfH6d9zxz3hdWj7fEzt75JC8cvY+iV6FOS6KxilLTWHoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAITlnwFMQscO8/EJ6wAAAABJRU5ErkJggg==",alt:"home",onClick:function(){o.animateScroll.scrollToTop({duration:100})}})}),Object(u.jsxs)("ul",{className:j.a.linkList,children:[Object(u.jsx)("li",{className:j.a.linkItem,children:Object(u.jsx)(o.Link,{className:j.a.link,activeClass:j.a.active,to:"about",spy:!0,smooth:!0,offset:-70,duration:100,children:"About"})}),Object(u.jsx)("li",{className:j.a.linkItem,children:Object(u.jsx)(o.Link,{className:j.a.link,activeClass:j.a.active,to:"skills",spy:!0,smooth:!0,offset:-70,duration:100,children:"Skills"})}),Object(u.jsx)("li",{className:j.a.linkItem,children:Object(u.jsx)(o.Link,{className:j.a.link,activeClass:j.a.active,to:"projects",spy:!0,smooth:!0,offset:-70,duration:100,children:"Projects"})})]})]})},f=c(4),h=c.n(f),A=c.p+"static/media/profile-pic.380f3b72.png",v=c(28),O=c.n(v),g=function(t){return Object(u.jsx)("section",{className:"".concat(O.a.card," ").concat(t.className),id:t.id,children:t.children})},x=c.p+"static/media/AYA_TAKAMURA.991e3508.pdf",k=c(13),w=[{name:"GitHub",link:"https://github.com/ayarmkt",icon:function(){return Object(u.jsx)(k.b,{className:"".concat(h.a.icon," ").concat(h.a.github)})}},{name:"LinkedIn",link:"https://www.linkedin.com/in/aya-t/",icon:function(){return Object(u.jsx)(k.c,{className:"".concat(h.a.icon," ").concat(h.a.linkedin)})}},{name:"Twitter",link:"https://twitter.com/ayarmkt_",icon:function(){return Object(u.jsx)(k.d,{className:"".concat(h.a.icon," ").concat(h.a.twitter)})}},{name:"Blog",link:"https://ayatakamura.hashnode.dev/",icon:function(){return Object(u.jsx)(k.a,{className:"".concat(h.a.icon," ").concat(h.a.blog)})}}],N=function(){var t=Object(a.useContext)(b),e=w.map((function(t){return Object(u.jsx)("a",{className:h.a.link,href:t.link,target:"_blank",children:t.icon()},t.name)}));return Object(u.jsxs)(g,{className:"".concat(h.a.about," ").concat(t.navIsSticky?h.a.sticky:""),id:"about",children:[Object(u.jsx)("h1",{className:h.a.title,children:"Hi, I'm Aya"}),Object(u.jsxs)("div",{className:h.a.text,children:[Object(u.jsx)("p",{children:"I am a Front-end Developer from Tokyo, Japan."}),Object(u.jsx)("p",{children:"I care about user experience and building user-friendly products."}),Object(u.jsx)("p",{children:"With 4 years of experience in Brand Marketing, I can contribute from both business and technology perspectives."}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{href:x,target:"_blank",children:"View my resume here"}),Object(u.jsxs)("div",{className:h.a["contact-list"],children:[" ",e]})]}),Object(u.jsx)("div",{className:h.a["profile-pic"],children:Object(u.jsx)("img",{src:A,alt:"Profile"})})]})},y=c(3),E=c.n(y),C=c(12),z=c(29),M=c.n(z),S=function(t){return Object(u.jsx)("h2",{className:M.a.h2,children:t.children})},U=[{name:"react",icon:function(){return Object(u.jsx)(C.f,{className:"".concat(E.a.icon," ").concat(E.a.react)})}},{name:"redux",icon:function(){return Object(u.jsx)(C.g,{className:"".concat(E.a.icon," ").concat(E.a.redux)})}},{name:"javascript",icon:function(){return Object(u.jsx)(C.e,{className:"".concat(E.a.icon," ").concat(E.a.javascript)})}},{name:"html",icon:function(){return Object(u.jsx)(C.d,{className:"".concat(E.a.icon," ").concat(E.a.html)})}},{name:"css",icon:function(){return Object(u.jsx)(C.a,{className:"".concat(E.a.icon," ").concat(E.a.css)})}},{name:"firebase",icon:function(){return Object(u.jsx)(C.c,{className:"".concat(E.a.icon," ").concat(E.a.firebase)})}},{name:"figma",icon:function(){return Object(u.jsx)(C.b,{className:"".concat(E.a.icon," ").concat(E.a.figma)})}}],q=function(){var t=Object(a.useRef)(),e=Object(a.useState)(!1),c=Object(r.a)(e,2),n=c[0],s=c[1],i=function(){var e=t.current.offsetTop,c=t.current.offsetTop+t.current.offsetHeight;e+250<window.scrollY+window.innerHeight&&c>window.scrollY?s(!0):s(!1)};Object(a.useLayoutEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]);var o=U.map((function(t){var e=t.icon();return Object(u.jsxs)("div",{className:E.a.skill,children:[e,Object(u.jsx)("p",{children:t.name.toUpperCase()})]},t.name)}));return Object(u.jsxs)(g,{className:E.a.skills,id:"skills",children:[Object(u.jsx)(S,{children:"Skills"}),Object(u.jsx)("div",{className:"".concat(E.a["skills-list-container"],"\n         ").concat(n?E.a.rotate:""),ref:t,children:Object(u.jsx)("div",{className:E.a["skills-list"],children:o})})]})},V=c(7),K=c.n(V),X=[{title:"BUG TRACKER",techName:"React (incl. React Context) | Redux | CSS | Firebase",src:c.p+"static/media/bug-tracker.df7a494f.png",alt:"bug tracker app",description:"A CRUD Bug Tracker App that can be used to manage and keep track of bugs in the project you are working on. It has authentication features (login, sign up, log out) and bug data management features (read bugs data, add new bugs, edit bugs, delete bugs).",livedemo:"https://bug-tracker-app-75bd0.firebaseapp.com",github:"https://github.com/ayarmkt/bug-tracker"},{title:"WEATHER APP",techName:"React (incl. React Context) | CSS | OpenWeatherMap",src:c.p+"static/media/weather-app.340ded8c.png",alt:"weather app",description:"A weather app with a minimalist design that retrieves weather data from the OpenWeatherMap API and displays the weather around the world.",livedemo:"https://ayatakamura-react-weather-app.netlify.app/",github:"https://github.com/ayarmkt/react-weather-app"},{title:"CALCULATOR",techName:"HTML | CSS | JavaScript",src:c.p+"static/media/calculator.3000e89f.png",alt:"calculator",description:"A calculator made with JavaScript. The calculator displays both the calculation process and the result. It has a plus/minus button and a percentage button.",livedemo:"https://ayarmkt.github.io/JS-calculator/",github:"https://github.com/ayarmkt/JS-calculator"}],L=function(){var t=Object(a.useRef)(),e=Object(a.useState)(!1),c=Object(r.a)(e,2),n=c[0],s=c[1],i=function(){var e=t.current.offsetTop,c=t.current.offsetTop+t.current.offsetHeight;e+250<window.scrollY+window.innerHeight&&c>window.scrollY?s(!0):s(!1)};Object(a.useLayoutEffect)((function(){return window.addEventListener("scroll",i),function(){return window.removeEventListener("scroll",i)}}),[]);var o=X.map((function(t){return Object(u.jsxs)("div",{className:K.a.project,children:[Object(u.jsx)("div",{className:K.a["project-img"],children:Object(u.jsx)("a",{href:t.livedemo,target:"_blank",children:Object(u.jsx)("img",{src:t.src,alt:t.alt})})}),Object(u.jsxs)("div",{className:K.a["project-description"],children:[Object(u.jsx)("h3",{className:K.a.title,children:t.title}),Object(u.jsx)("p",{className:K.a.subtitle,children:"<Personal Project>"}),Object(u.jsx)("p",{className:K.a.tech,children:t.techName}),Object(u.jsxs)("div",{className:K.a.link,children:[Object(u.jsx)("a",{className:K.a.live,href:t.livedemo,target:"_blank",children:"Live Demo"}),Object(u.jsx)("a",{className:K.a.github,href:t.github,target:"_blank",children:"GitHub"})]}),Object(u.jsx)("p",{className:K.a.description,children:t.description})]})]},t.title)}));return Object(u.jsxs)(g,{className:K.a.projects,id:"projects",children:[Object(u.jsx)(S,{children:"Projects"}),Object(u.jsx)("div",{className:"".concat(K.a["projects-list"]," ").concat(n?K.a.rotate:""),ref:t,children:o})]})},I=c(5),R=c.n(I),J=c(30),Y=c(31),B=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(u.jsxs)("nav",{className:R.a.nav,children:[Object(u.jsxs)("ul",{className:"".concat(R.a.links," ").concat(c?R.a.open:""),children:[Object(u.jsx)("li",{className:R.a.linkItem,children:Object(u.jsx)(o.Link,{className:R.a.link,activeClass:R.a.active,to:"about",spy:!0,smooth:!0,offset:-70,duration:100,children:"About"})}),Object(u.jsx)("li",{className:R.a.linkItem,children:Object(u.jsx)(o.Link,{className:R.a.link,activeClass:R.a.active,to:"skills",spy:!0,smooth:!0,offset:-70,duration:100,children:"Skills"})}),Object(u.jsx)("li",{className:R.a.linkItem,children:Object(u.jsx)(o.Link,{className:R.a.link,activeClass:R.a.active,to:"projects",spy:!0,smooth:!0,offset:-70,duration:100,children:"Projects"})})]}),!c&&Object(u.jsx)(J.a,{className:R.a.icon,size:"50px",onClick:function(){n(!0)}}),c&&Object(u.jsx)(Y.a,{className:R.a.icon,size:"50px",onClick:function(){n(!1)}})]})},Q=function(){return{width:window.innerWidth}},W=function(){var t=Object(a.useState)(Q()),e=Object(r.a)(t,2),c=e[0],n=e[1];return Object(a.useEffect)((function(){var t=function(){n(Q())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),c},H=c(33),_=c(32),Z=c.n(_),G=function(){return Object(u.jsx)("footer",{className:Z.a.footer,children:Object(u.jsx)("p",{children:"Made with \u2665 by Aya \xa9 2021 All Rights Reserved"})})};var T=function(){var t=Object(a.useContext)(b),e=Object(a.useState)(!1),c=Object(r.a)(e,2),s=c[0],i=c[1],l=W().width;Object(a.useEffect)((function(){l<=1023?t.setMobile():t.setNotMobile()}),[l]);var j=function(){80<window.scrollY?i(!0):i(!1)};return Object(a.useLayoutEffect)((function(){return window.addEventListener("scroll",j),function(){return window.removeEventListener("scroll",j)}}),[]),Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsxs)("header",{children:[!t.mobile&&Object(u.jsx)(p,{}),t.mobile&&Object(u.jsx)(B,{})]}),Object(u.jsxs)("main",{children:[Object(u.jsx)(N,{}),Object(u.jsx)(q,{}),Object(u.jsx)(L,{}),Object(u.jsx)(H.a,{className:"to-top-icon ".concat(s?"showIcon":""),size:"50px",onClick:function(){o.animateScroll.scrollToTop({duration:100})}})]}),Object(u.jsx)(G,{})]})},P=c(36);i.a.render(Object(u.jsx)(P.a,{children:Object(u.jsx)(m,{children:Object(u.jsx)(T,{})})}),document.getElementById("root"))},6:function(t,e,c){t.exports={nav:"Navbar_nav__3Z0pX",sticky:"Navbar_sticky__Wz-gO",icon:"Navbar_icon__3uEp4",linkItem:"Navbar_linkItem__21jgv",link:"Navbar_link__3_5Po",active:"Navbar_active__1_B35"}},7:function(t,e,c){t.exports={"projects-list":"Projects_projects-list__3ztzP",rotateBackwards:"Projects_rotateBackwards__gLTvt",rotate:"Projects_rotate__1uR0Y",rotateForwards:"Projects_rotateForwards__FtDES",project:"Projects_project__1VOTc","project-img":"Projects_project-img__dtiqK","project-description":"Projects_project-description__3z3zb",title:"Projects_title__3z3a-",subtitle:"Projects_subtitle__3s9TY",tech:"Projects_tech__2nk2M",link:"Projects_link__3GZZN",live:"Projects_live__1yHHm",github:"Projects_github__3sBoq",description:"Projects_description__1k1oY"}}},[[57,1,2]]]);
//# sourceMappingURL=main.b19c7bda.chunk.js.map