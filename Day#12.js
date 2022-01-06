let a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten ','eleven ','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];


const sayNumberInEnglish = (n /* ADD MORE PARAMETERS IF NEEDED */) => {
    let num = n;
	    if ((num = num.toString()).length > 12) return 'overflow';
    n = ('000000000000' + num).substr(-12).match(/^(\d{3})(\d{3})(\d{3})(\d{3})$/);
    console.log(n);
    if (!n) return; var str = '';

    

    str += (n[1][0] != 0 ) ? (a[Number(n[1][0])] || b[n[1][1]] + ' ' + a[n[1][2]]) + ' hundred ' : '';

    str += (n[1][1] != 0 ) ? (a[Number(n[1][1]+n[1][2])] ||  b[n[1][1]] + ' ' + a[n[1][2]] ) + ' billion ' : '';

    str += (n[2][0] != 0 ) ? (a[Number(n[2][0])] || b[n[2][1]] + ' ' + a[n[2][2]]) + ' hundred ' : '';

    str += (n[2][1] != 0 ) ? (a[Number(n[2][1]+n[2][2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' million ' : '';

    str += (n[3][0] != 0 ) ? (a[Number(n[3][0])] || b[n[3][1]] + ' ' + a[n[3][2]]) + ' hundred ' : '';

    str += (n[4][0] != 0 ) ? (a[Number(n[4][0])] || b[n[4][1]] + ' ' + a[n[4][2]]) + ' thousand ' : '';

    // str += (n[1][2] != 0 || n[2][0] != 0 ) ? (a[Number(n[1][2])] || b[n[1][2]] + ' ' + a[n[2][0]]) + ' hundred ' : '';

    // str += (n[2][0] != 0 ) ? ( b[n[2][0]] + ' ' + a[n[2][1]]) + ' crore ' : '';

    // str += (n[2][2] != 0) ? (a[Number(n[2][2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' million ' : '';

    // str += (n[3][0] != 0) ? (a[Number(n[3][0])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' hundred ' : '';

    // str += (n[3][2] != 0 ) ? ( b[n[3][2]] + ' ' + a[n[4][1]]) + ' crore ' : '';

    // str += (n[1][1] != 0) ? (b[n[1][1]] + ' ' ):'';

    // str += (n[1][2] != 0) ? (a[Number(n[1][2])] + ' ' ) + ' crore ' : '';
//     if(Number(n[2])>9){
//         str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + ' million ' : '';
//         str += (n[2] != 0) ? (a[Number(b[n[2][1]])] + ' ' + a[n[2][1]]) + ' lakh ' : '';
//     }
    

//     str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + ' thousand ' : '';
//     str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + ' hundred ' : '';
    // str += (n[4] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]): -1;
    return str;
}

console.log(`5635 in english is: ${sayNumberInEnglish(329419222200)}`)
