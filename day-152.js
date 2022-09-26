// Determine offspring sex based on genes XX and XY chromosomes
Function chromosomeCheck(sperm){
    if(sperm === 'XY') return `Congratulations! You're going to have a son.` 
    return `Congratulations! You're going to have a daughter.`
}