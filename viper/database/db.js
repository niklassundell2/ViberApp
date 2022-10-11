import React from 'react';

import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'viber.db' });
var tableName="profiles";
var tableName2="cart";
//method returns a Promise - in the calling side .then(...).then(...)....catch(...) can be used
export const init=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('DROP TABLE IF EXISTS profiles', []); //uncomment this if needed - sometimes it is good to empty the table
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists '+tableName+'(id integer not null primary key, name text not null, image text not null, points text not null);',
            [],//second parameters of execution:empty square brackets - this parameter is not needed when creating table
            //If the transaction succeeds, this is called
            ()=>{
                resolve();//There is no need to return anything
                addProfile("Demo", "https://reactjs.org/logo-og.png","100")
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
            tx.executeSql('DROP TABLE IF EXISTS cart', []); //uncomment this if needed - sometimes it is good to empty the table
            //By default, primary key is auto_incremented - we do not add anything to that column
            tx.executeSql('create table if not exists '+tableName2+'(id integer not null primary key, name text not null, price text not null, size text not null);',
            [],//second parameters of execution:empty square brackets - this parameter is not needed when creating table
            //If the transaction succeeds, this is called
            ()=>{
                resolve();//There is no need to return anything
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const addProfile=(name, image,points)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('insert into '+tableName+'(name, image,points) values(?,?,?);',
            //And the values come here
            [name, image,points],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};

export const addCart=(name, price, size)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('insert into '+tableName2+'(name, price, size) values(?,?,?);',
            //And the values come here
            [name, price, size],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};


export const readProfile=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from '+tableName, [],
                (tx, result)=>{
                    let items=[];//Create a new empty Javascript array
                    //And add all the items of the result (database rows/records) into that table
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));//The form of an item is {"breed": "Pike", "id": 1, "weight": 5000}
                        console.log(result.rows.item(i));//For debugging purposes to see the data in console window
                    }
                    console.log(items);//For debugging purposes to see the data in console window
                    resolve(items);//The data the Promise will have when returned
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const readCart=()=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we select all from the table fish
            tx.executeSql('select * from '+tableName2, [],
                (tx, result)=>{
                    let items=[];//Create a new empty Javascript array
                    //And add all the items of the result (database rows/records) into that table
                    for (let i = 0; i < result.rows.length; i++){
                        items.push(result.rows.item(i));//The form of an item is {"breed": "Pike", "id": 1, "weight": 5000}
                        console.log(result.rows.item(i));//For debugging purposes to see the data in console window
                    }
                    console.log(items);//For debugging purposes to see the data in console window
                    resolve(items);//The data the Promise will have when returned
                },
                (tx,err)=>{
                    console.log("Err");
                    console.log(err);
                    reject(err);
                }
            );
        });
    });
    return promise;
};

export const deleteItem=(id)=>{
    const promise=new Promise((resolve, reject)=>{
        db.transaction((tx)=>{
            //Here we use the Prepared statement, just putting placeholders to the values to be inserted
            tx.executeSql('delete from '+tableName2+' where id=?;',
            //And the values come here
            [id],
            //If the transaction succeeds, this is called
            ()=>{
                    resolve();
            },
            //If the transaction fails, this is called
            (_,err)=>{
                reject(err);
            }
            );
        });
    });
    return promise;
};
