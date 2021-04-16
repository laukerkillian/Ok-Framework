/*let strings = [];
let string_created = false;
let string_created_with;
let temp_string = "";
let snapshots = [];

let test = `["ok", "hey", ["Hey"]`
let parsed  = test.split("")
let i = 0;
for(const el of parsed){
    if(string_created){
        snapshots.push(i)
        if(el === string_created_with){
            for(const snapshot of snapshots) {
                console.log(snapshot)
                console.log(parsed[snapshot])
                parsed[snapshot] = undefined;
            }
            parsed[snapshots[0]] = strings.length;
            parsed = parsed.filter(function(value){
                if(value === undefined) {
                    return false
                }
                return true
            });
            strings.push(temp_string);
            temp_string = "";
            string_created = false;
            string_created_with = '';
            snapshots = []
            i++
            continue;
        }
        temp_string += el;
    }else {
        if(el === '"'){
            snapshots.push(i)
            string_created = true;
            string_created_with = '"';
        }else if(el === "'"){
            snapshots.push(i)
            string_created = true;
            string_created_with = "'";
        }else if(el === "`"){
            snapshots.push(i)
            string_created = true;
            string_created_with = "`";
        }
    }
    i++;
}

console.log(strings);
console.log(parsed)*/