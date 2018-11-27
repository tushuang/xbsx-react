import BScroll from 'better-scroll'

let none = ()=>{}

export const scroll = ({el,options,scroll = none,pullingUp = none,scrollEnd = none})=>{
    let _scroll = new BScroll(el,options)

    _scroll.on('scroll',scroll)
    _scroll.on('pullingUp',pullingUp)
    _scroll.on('scrollEnd',scrollEnd)
    return _scroll
}