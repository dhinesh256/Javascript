var i=0
function demo_workers(){
    i+=1
    postMessage(i)
    setTimeout("demo_workers()",1000)
}
demo_workers()